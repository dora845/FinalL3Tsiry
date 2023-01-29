import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppbarLogged from "./appbar/appbarLogged";
import AppbarLoggin from "./appbar/appbarLoggin";

const pages = [
    "Validation Credit",
    "Releve de Note",
    "Certificat de Scolarite",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ isLogged, setToken }) {
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
