import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import ResponsiveAppBar from "../../components/etudiant/appbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import EnhancedTable from "./table/datatable";
window.Swal = Swal;

const toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
});

window.toast = toast;
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Fac Science
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

export default function IndexSco({ token }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar isLogged={true} />
            <Container component="main" maxWidth="xl" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Liste de Scolarite
                    </Typography>
                    <EnhancedTable />
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
