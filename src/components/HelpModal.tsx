import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function HelpModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setOpen(true)}
        sx={{ position: "absolute", top: 10, right: 10 }}
        aria-label="Ayuda"
      >
        <HelpOutlineIcon />
      </IconButton>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          ¿Cómo usar la app?
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            1. Ingresá el nombre y el monto que aportó cada persona y presioná
            "Agregar".
          </Typography>
          <Typography gutterBottom>
            2. Repetí para todas las personas que participaron en el gasto.
          </Typography>
          <Typography gutterBottom>
            3. Cuando estén todas, presioná "Calcular" para ver quién le debe a
            quién.
          </Typography>
          <Typography gutterBottom>
            4. Podés guardar el resultado en PDF o limpiar todo para empezar de
            nuevo.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
