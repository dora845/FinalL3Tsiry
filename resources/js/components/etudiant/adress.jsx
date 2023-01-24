import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

const niveau = [
    { value: "L1", label: "1ere annee" },
    { value: "L2", label: "2eme annee" },
    { value: "L3", label: "3eme annee" },
    { value: "M1", label: "4eme annee" },
    { value: "M2", label: "5eme annee" },
];
const parcours = [
    { value: "GB", label: "Genie Logiciel et base de donnee" },
    { value: "ASR", label: "Administration systeme et reseaux" },
    { value: "IG", label: "informatique generale" },
];

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Information Personnelle
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        id="firstName"
                        name="firstName"
                        label="Prenom"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Nom"
                        fullWidth
                        autoComplete="family-name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="address1"
                        name="address1"
                        label="numero Carte Etudiant"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="E-mail"
                        fullWidth
                        autoComplete="E-mail"
                        variant="outlined"
                        type="email"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Mention"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                        select
                    >
                        {parcours.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="address2"
                        name="address2"
                        label=" Parcours"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                        select
                    >
                        {parcours.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="Niveau"
                        select
                        defaultValue="L1"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                    >
                        {niveau.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="dateNaiss"
                        name="dateNaiss"
                        label="date de Naissance"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="outlined"
                        type={"date"}
                        focused
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="LieuNaiss"
                        name="lieuNaiss"
                        label="lieu de naissance"
                        fullWidth
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveAddress"
                                value="yes"
                            />
                        }
                        label="utiliser l'adresse e-mail pour la validation"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
