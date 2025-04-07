import { useEffect, useState } from "react";
import { Person, Result } from "../entities/entities";
import { Button, Container, Stack } from "@mui/material";
import PersonForm from "./PersonForm";
import PersonList from "./PersonList";
import SplitResult from "./SplitResult";
import { generatePDF } from "../utils/pdfGenerator";

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("people");
    if (saved) setPeople(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const addPerson = (person: Person) => {
    setPeople((prev) => [...prev, person]);
    setResults([]); // limpiar cálculos
  };

  const removePerson = (index: number) => {
    setPeople((prev) => prev.filter((_, i) => i !== index));
    setResults([]); // limpiar cálculos
  };

  const calculate = () => {
    const total = people.reduce((sum, p) => sum + p.amount, 0);
    const average = total / people.length;

    const balances = people.map((p) => ({
      name: p.name,
      balance: Number((p.amount - average).toFixed(2)),
    }));

    const debtors = balances.filter((b) => b.balance < 0);
    const creditors = balances.filter((b) => b.balance > 0);

    const res: Result[] = [];

    let i = 0,
      j = 0;

    while (i < debtors.length && j < creditors.length) {
      const debtor = debtors[i];
      const creditor = creditors[j];
      const amount = Math.min(-debtor.balance, creditor.balance);

      res.push({
        from: debtor.name,
        to: creditor.name,
        amount,
      });

      debtor.balance += amount;
      creditor.balance -= amount;

      if (Math.abs(debtor.balance) < 0.01) i++;
      if (Math.abs(creditor.balance) < 0.01) j++;
    }

    setResults(res);
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 4, pb: 12 }}>
        <PersonForm onAdd={addPerson} />
        <PersonList people={people} onRemove={removePerson} />
        <SplitResult results={results} />
      </Container>

      <Stack
        direction="column"
        spacing={2}
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "#fff",
          p: 2,
          zIndex: 1000,
          boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Button
          variant="contained"
          fullWidth
          onClick={calculate}
          disabled={people.length < 2}
        >
          Calcular
        </Button>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => generatePDF(people, results)}
            disabled={results.length === 0}
          >
            Descargar PDF
          </Button>
          <Button
            variant="outlined"
            color="error"
            fullWidth
            onClick={() => {
              setPeople([]);
              setResults([]);
              localStorage.removeItem("people");
            }}
          >
            Limpiar todo
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
