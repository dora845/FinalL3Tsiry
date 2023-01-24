import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Validation
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="body1" color="initial">
                        Monsieur/Madame Le Chef de Service de la Scolarite,{" "}
                        <br />
                        J'ai l'honneur de vous solliciter de me delivrer la
                        (les) pieces suivantes :
                    </Typography>
                </Grid>
                <Grid item xs={6} md={12}>
                    <Typography variant="body1" color="initial">
                        Attestation de validation de credit en :
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="level"
                        label="semestre"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="year"
                        label="annee d'obtention"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveCard"
                                value="yes"
                            />
                        }
                        label="J'accepte les condition d'utilisation"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
