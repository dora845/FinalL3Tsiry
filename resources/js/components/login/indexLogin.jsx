import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
window.Swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

window.toast = toast;
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

export default function SignInSide({ setToken }) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("password", passwd),
            formData.append("remember", remember),
            await axios
                .post("/api/login/", formData)
                .then(({ data }) => {
                    toast.fire({
                        icon: "success",
                        title: data.message,
                    });
                    setToken(data.token);

                    if (data.type == "mention") {
                        navigate("/user/mentions");
                    } else {
                        navigate("/user/sco");
                    }
                })
                .catch(({ response }) => {
                    toast.fire({
                        icon: "error",
                        title: response.data.message,
                    });
                });
    };
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [remember, setRemember] = useState(false);
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://source.unsplash.com/random)",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Se connecter
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Adresse E-mail"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                value={passwd}
                                onChange={(event) => {
                                    setPasswd(event.target.value);
                                }}
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={remember}
                                        onChange={(e) =>
                                            setRemember(e.target.checked)
                                        }
                                        color="primary"
                                    />
                                }
                                label="Se souvenir de moi"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Se connecter
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Mot de passe oublie?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link
                                        to="/register"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/register");
                                        }}
                                        variant="body2"
                                    >
                                        {"Pas de compte? S'enregistrer"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
