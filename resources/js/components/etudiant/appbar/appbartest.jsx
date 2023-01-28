import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";

export const AppBarTest = () => {
    return (
        <div>
            <AppBar>
                <Typography
                    variant="h6"
                    color="inherit"
                    // className={classes.grow}
                >
                    News
                </Typography>
            </AppBar>
        </div>
    );
};
