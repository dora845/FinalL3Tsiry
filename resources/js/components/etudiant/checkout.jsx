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
import AddressForm from "./adress";
import PaymentForm from "./payement";
import { red } from "@mui/material/colors";
import ResponsiveAppBar from "./appbar";
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

const steps = ["Information personnelle", "Validation"];

function getStepContent(
    step,
    toEmail,
    toNumcarte,
    toName,
    toFirstname,
    toBirthdate,
    toBirthplace,
    toMention,
    toParcours,
    toNiveau,
    toAnnee,
    toSemestre
) {
    switch (step) {
        case 0:
            return (
                <AddressForm
                    tobirthdate={toBirthdate}
                    tobirthplace={toBirthplace}
                    toemail={toEmail}
                    tofirstname={toFirstname}
                    tomention={toMention}
                    toname={toName}
                    toniveau={toNiveau}
                    tonumcarte={toNumcarte}
                    toparcours={toParcours}
                />
            );
        case 1:
            return (
                <PaymentForm
                    toannee={toAnnee}
                    tosemestre={toSemestre}
                    to="le/la chef de mention"
                    type="validation de credit"
                />
            );
        default:
            throw new Error("Unknown step");
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
    },
});

export default function IndexEtudiant() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        console.log(activeStep);
        if (activeStep === steps.length - 1) {
            console.log(annee);
            handleSubmit();
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    /******************** post with axios */
    const handleSubmit = async (event) => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("numcarte", numcarte);
        formData.append("annee", annee);
        formData.append("type", "validation");
        formData.append("firstname", firstname);
        formData.append("name", name);
        formData.append("birthdate", birthdate);
        formData.append("birthplace", birthplace);
        formData.append("semestre", semestre);
        formData.append("mentions", mentions);
        formData.append("parcours", parcours);
        formData.append("niveau", niveau);

        await axios
            .post("/api/demander/", formData)
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
    const [numcarte, setNumcarte] = useState("");
    const [name, setName] = useState("");
    const [annee, setAnnee] = useState("");
    const [firstname, setFirstname] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [birthplace, setBirthplace] = useState("");
    const [semestre, setSemestre] = useState("");
    const [mentions, setMentions] = useState("");
    const [parcours, setParcours] = useState("");
    const [niveau, setNiveau] = useState("");

    /******** end post ********* */
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ResponsiveAppBar isLogged={false} />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Validation de Credit
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 2, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed
                                your order confirmation, and will send you an
                                update when your order has shipped.
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={(e) => {
                                    // e.preventDefault();
                                    setActiveStep(0);
                                }}
                            >
                                Nouveau validation
                            </Button>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(
                                activeStep,
                                {
                                    email: email,
                                    setEmail: setEmail,
                                },
                                {
                                    numcarte: numcarte,
                                    setNumcarte: setNumcarte,
                                },
                                { name: name, setName: setName },
                                {
                                    firstname: firstname,
                                    setFirstname: setFirstname,
                                },
                                {
                                    birthdate: birthdate,
                                    setBirthdate: setBirthdate,
                                },
                                {
                                    birthplace: birthplace,
                                    setBirthplace: setBirthplace,
                                },
                                { mention: mentions, setMention: setMentions },
                                {
                                    parcours: parcours,
                                    setParcours: setParcours,
                                },
                                { niveau: niveau, setNiveau: setNiveau },
                                { annee: annee, setAnnee: setAnnee },
                                { semestre: semestre, setSemestre: setSemestre }
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        onClick={handleBack}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Retour
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1
                                        ? "Envoyer"
                                        : "Suivant"}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
