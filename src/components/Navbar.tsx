import { AppBar, Toolbar, Typography, Box } from "@mui/material";

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
          <Typography variant="h6" sx={{ color: "#000000", fontWeight: 600 }}>
            Shadow Division
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
