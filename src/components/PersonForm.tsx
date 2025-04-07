import { useState } from "react";
import { Person } from "../entities/entities";
import { Button, Stack, TextField } from "@mui/material";

interface Props {
  onAdd: (person: Person) => void;
}
/*************  ✨ Codeium Command ⭐  *************/
/**
 * A form component for adding a person with a name and a contributed amount.
 *
 * Props:
 * - onAdd: Function to call with the person object containing name and amount when the form is submitted.
 *
 * The form consists of two text fields for name and amount, and a button to submit the form.
 * The amount field only accepts numerical input.
 * When submitted, the form clears its fields.
 */

/******  24fef16f-1e98-41f9-9a7e-2ed81aa663c2  *******/
export default function PersonForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!name || !amount) return;
    onAdd({ name, amount: parseFloat(amount) });
    setName("");
    setAmount("");
  };

  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <TextField
          label="Nombre"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Monto"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Stack>

      <Button variant="contained" onClick={handleSubmit} fullWidth>
        Agregar
      </Button>
    </Stack>
  );
}
