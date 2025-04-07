import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import AttachMoney from "@mui/icons-material/AttachMoney";

export default function Navbar() {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#3f51b5", fontWeight: 600 }}>
            Shadow Division
          </Typography>
          <AttachMoney sx={{ mr: 1, color: "#3f51b5" }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
