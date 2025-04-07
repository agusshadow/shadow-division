import { Typography, List, ListItem, ListItemText } from "@mui/material";

type Result = {
  from: string;
  to: string;
  amount: number;
};

type Props = {
  results: Result[];
};

export default function SplitResult({ results }: Props) {
  if (results.length === 0) return null;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resultado de deudas
      </Typography>
      <List>
        {results.map((r, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${r.from} le debe $${r.amount.toFixed(2)} a ${r.to}`}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
