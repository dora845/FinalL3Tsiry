import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../../assets/logoSiansa.png";
import { Link } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AppbarLogged from "./appbar/appbarLogged";
import AppbarLoggin from "./appbar/appbarLoggin";

const pages = [
    "Validation Credit",
    "Releve de Note",
    "Certificat de Scolarite",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ isLogged }) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const navigate = useNavigate();
    // console.log(isLogged);
    if (isLogged) {
        return (
            <>
                <AppbarLogged />
            </>
        );
    } else {
        return (
            <>
                <AppbarLoggin />
            </>
        );
    }
}
export default ResponsiveAppBar;
