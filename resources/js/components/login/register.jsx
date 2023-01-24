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

export default function Register() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("passwd", passwd);
        formData.append("name", name);
        formData.append("matricule", matricule);
        formData.append("firstname", firstname);
        formData.append("cin", cin);
        formData.append("birthdate", birthdate);
        formData.append("birthplace", birthplace);
        formData.append("sexe", sexe);
        formData.append("poste", poste);

        await axios
            .post("/api/register/", formData)
            .then(({ data }) => {
                toast.fire({
                    icon: "success",
                    title: "inscrit",
                });
                navigate("/");
            })
            .catch(({ response }) => {});
        // console.log({
        //     email: data.get("email"),
        //     password: data.get("password"),
        //     remember: data.get("remember"),
        // });
    };

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [name, setName] = useState("");
    const [matricule, setMatricule] = useState("");
    const [firstname, setFirstname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [sexe, setSexe] = useState("");
    const [cin, setCin] = useState("");
    const [poste, setPoste] = useState("");

    // const [address, setAddress] = useState("");
    // const [nation, setNation] = useState("");

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
                            S'inscrire
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 3 }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        value={firstname}
                                        onChange={(e) => {
                                            setFirstname(e.target.value);
                                        }}
                                        fullWidth
                                        id="firstName"
                                        label="Prenoms"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="name"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        label="Noms"
                                        name="firstname"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="matricule"
                                        label="Matricule"
                                        value={matricule}
                                        onChange={(e) => {
                                            setMatricule(e.target.value);
                                        }}
                                        name="matricule"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="birthdate"
                                        type="date"
                                        label="naissance"
                                        value={birthdate}
                                        onChange={(e) => {
                                            setBirthdate(e.target.value);
                                        }}
                                        name="birthdate"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="birthplace"
                                        label="Lieu Naissance"
                                        value={birthplace}
                                        onChange={(e) => {
                                            setBirthplace(e.target.value);
                                        }}
                                        name="bithplace"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="sexe"
                                        label="Sexe"
                                        value={sexe}
                                        onChange={(e) => {
                                            setSexe(e.target.value);
                                        }}
                                        name="sexe"
                                        // autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="CIN"
                                        label="CIN"
                                        value={cin}
                                        onChange={(e) => {
                                            setCin(e.target.value);
                                        }}
                                        name="cin"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="poste"
                                        label="poste"
                                        value={poste}
                                        onChange={(e) => {
                                            setPoste(e.target.value);
                                        }}
                                        name="Poste"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={passwd}
                                        onChange={(e) => {
                                            setPasswd(e.target.value);
                                        }}
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                S'inscrire
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link
                                        to="/"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            navigate("/");
                                        }}
                                        variant="body2"
                                    >
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
