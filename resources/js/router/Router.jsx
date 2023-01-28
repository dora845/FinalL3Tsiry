import React from "react";

import { Routes, Route } from "react-router-dom";
import IndexEtudiant from "../components/etudiant/checkout";
import Certificat from "../components/etudiant/pages/certificat";
import Releve from "../components/etudiant/pages/revele";
// import Index from "../components/mention";
import SignInSide from "../components/login/indexLogin";
import Register from "../components/login/register";
import NotFound from "../components/NotFound";
const Router = () => {
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<AppBarTest />} /> */}
                <Route path="/" element={<IndexEtudiant />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<SignInSide />} />
                <Route path="/releve" element={<Releve />} />
                <Route path="/certificat" element={<Certificat />} />
            </Routes>
        </div>
    );
};
export default Router;
