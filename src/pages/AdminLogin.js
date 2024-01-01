import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { getAllAdmins } from "../services/adminsService";
import Loading from "../components/Loading";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const allAdminsResponse = await getAllAdmins();
      const loggedInUserCredentials = allAdminsResponse.find(
        (element) =>
          element.userName === userName && element.password === password
      );

      if (!loggedInUserCredentials) {
        toast.error("Kullanıcı bilgileri yanlış");
      } else {
        toast.success("Giriş başarılı.");
      }

      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error.message);
      toast.error("Kullanıcı bilgileri yanlış");
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h4" align="center" gutterBottom>
            Admin Login
          </Typography>
          <form>
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              label="Şifre"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;
