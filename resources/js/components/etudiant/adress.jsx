import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";

export default function AddressForm({
    toname,
    tofirstname,
    tonumcarte,
    toemail,
    tomention,
    toparcours,
    toniveau,
    tobirthdate,
    tobirthplace,
}) {
    const mentionsWithAll = {
        mention: [
            {
                value: "Mathematique et Applications",
                parcours: [
                    {
                        value: "MF",
                        niveau: ["L1", "L2", "L3", "M1", "M2"],
                    },
                    {
                        value: "ME",
                        niveau: ["L1", "L2", "L3", "M1", "M2"],
                    },
                    {
                        value: "MISS",
                        niveau: ["L1", "L2", "L3", "M1", "M2"],
                    },
                ],
            },
            {
                value: "Physique Chimie",
                parcours: [
                    {
                        value: "Physique",
                        niveau: ["L1", "L2", "L3"],
                    },
                    {
                        value: "Chimie",
                        niveau: ["L1", "L2", "L3"],
                    },
                    {
                        value: "LP3E",
                        niveau: ["L1", "L2", "L3"],
                    },
                ],
            },
            {
                value: "Physique et Applications",
                parcours: [
                    {
                        value: "EA2I",
                        niveau: ["L1", "L2", "L3"],
                    },
                    {
                        value: "CAP",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "MET",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "EMS",
                        niveau: ["M1", "M2"],
                    },
                ],
            },
            {
                value: "Sciences de la vie",
                parcours: [
                    {
                        value: "BM",
                        niveau: ["L1", "L2", "L3", "M1", "M2"],
                    },
                    {
                        value: "BT",
                        niveau: ["L1", "L2", "L3", "M1", "M2"],
                    },
                ],
            },
            {
                value: "Chimie",
                parcours: [
                    {
                        value: "Chimie Medicale",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "Geochimie",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "Vini-Viticole",
                        niveau: ["M1", "M2"],
                    },
                ],
            },
            {
                value: "GSEEH",
                parcours: [
                    {
                        value: "IEET",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "GIRE",
                        niveau: ["M1", "M2"],
                    },
                    {
                        value: "ER",
                        niveau: ["M1", "M2"],
                    },
                ],
            },
        ],
    };
    const [parcours1, setParcours1] = React.useState([]);
    const [niveau1, setNiveau1] = React.useState([]);
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
                        value={tofirstname.firstname}
                        onChange={(e) => {
                            tofirstname.setFirstname(e.target.value);
                        }}
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
                        value={toname.name}
                        onChange={(e) => {
                            toname.setName(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="numcarte"
                        name="numcarte"
                        label="numero Carte Etudiant"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="outlined"
                        value={tonumcarte.numcarte}
                        onChange={(e) => {
                            tonumcarte.setNumcarte(e.target.value);
                        }}
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
                        // type="email"
                        value={toemail.email}
                        onChange={(e) => {
                            toemail.setEmail(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="mention"
                        name="mention"
                        label="Mention"
                        fullWidth
                        autoComplete="mention"
                        variant="outlined"
                        select
                        value={tomention.mention}
                        onChange={(e) => {
                            tomention.setMention(e.target.value);
                        }}
                    >
                        {mentionsWithAll.mention.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setParcours1(option.parcours);
                                }}
                            >
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="parcours"
                        name="parcours"
                        label=" Parcours"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                        select
                        value={toparcours.parcours}
                        onChange={(e) => {
                            toparcours.setParcours(e.target.value);
                        }}
                    >
                        {tomention.mention === "" ? (
                            <MenuItem>mention d'abord</MenuItem>
                        ) : (
                            parcours1.map((option) => (
                                <MenuItem
                                    key={option.value}
                                    value={option.value}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setNiveau1(option.niveau);
                                    }}
                                >
                                    {option.value}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="niveau"
                        name="niveau"
                        label="Niveau"
                        select
                        defaultValue="L1"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="outlined"
                        value={toniveau.niveau}
                        onChange={(e) => {
                            toniveau.setNiveau(e.target.value);
                        }}
                    >
                        {toparcours.parcours === "" ? (
                            <MenuItem>parcours d'abord</MenuItem>
                        ) : (
                            niveau1.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))
                        )}
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
                        value={tobirthdate.birthdate}
                        onChange={(e) => {
                            tobirthdate.setBirthdate(e.target.value);
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="LieuNaiss"
                        name="lieuNaiss"
                        label="lieu de naissance"
                        fullWidth
                        variant="outlined"
                        value={tobirthplace.bithplace}
                        onChange={(e) => {
                            tobirthplace.setBirthplace(e.target.value);
                        }}
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
