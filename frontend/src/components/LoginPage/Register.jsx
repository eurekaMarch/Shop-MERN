import { useState } from "react";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "3rem",
        flexGrow: 1,
      }}
    >
      <Grid
        container
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          px: "2rem",
        }}
      >
        <Grid xs={12} sm={8} md={4}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <form>
              <InputBase
                type="text"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  pt: "3rem",
                  px: "3rem",
                  width: "100%",
                  input: {
                    background: "white",
                    pl: "1rem",
                    height: "5rem",

                    border: 1,
                    borderRadius: 1.2,
                    borderColor: grey[300],
                  },
                }}
              ></InputBase>
              <InputBase
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  pt: "2rem",
                  px: "3rem",
                  width: "100%",
                  input: {
                    background: "white",
                    pl: "1rem",
                    height: "5rem",

                    border: 1,
                    borderRadius: 1.2,
                    borderColor: grey[300],
                  },
                }}
              ></InputBase>
              <InputBase
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  pt: "2rem",
                  px: "3rem",
                  width: "100%",
                  input: {
                    background: "white",
                    pl: "1rem",
                    height: "5rem",

                    border: 1,
                    borderRadius: 1.2,
                    borderColor: grey[300],
                  },
                }}
              ></InputBase>
              <Button
                variant="contained"
                color="green"
                size="normal"
                sx={{ width: "10rem", my: "2rem", fontSize: "1.6rem" }}
                onClick={() =>
                  onRegister({
                    username: name,
                    email,
                    password,
                  })
                }
              >
                Register
              </Button>
            </form>

            <Link to="/login">
              <Typography sx={{ color: grey[600], mb: "3rem" }}>
                I Have Account <strong>Login</strong>
              </Typography>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Register;
