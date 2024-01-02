import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthService from "../../services/AuthService";
import Loading from "../../components/Loading";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      await AuthService.login(username, password);
      if (AuthService.isLoggedIn()) {
        toast.success("Giriş başarılı.");
        navigate("/admin/basvuru-listesi");
      } else {
        toast.error("Kullanıcı bilgileri yanlış.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
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
            Admin Giriş
          </Typography>
          <form>
            <TextField
              label="Kullanıcı Adı"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
