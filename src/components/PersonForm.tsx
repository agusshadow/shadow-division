import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

type Props = {
  onAdd: (person: { name: string; amount: number }) => void;
};

export default function PersonForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    if (!name || isNaN(Number(amount))) return;
    onAdd({ name, amount: Number(amount) });
    setName("");
    setAmount("");
  };

  return (
    <Stack spacing={2} direction="row">
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Monto aportado"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Agregar
      </Button>
    </Stack>
  );
}
