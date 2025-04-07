import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";

type Result = {
  from: string;
  to: string;
  amount: number;
};

type Props = {
  results: Result[];
};

export default function SplitResult({ results }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (results.length > 0) {
      setOpen(true);
    }
  }, [results]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Resultado de deudas
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <List>
          {results.map((r, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={`${r.from} le debe $${r.amount.toFixed(2)} a ${r.to}`}
              />
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
