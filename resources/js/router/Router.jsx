import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import IndexEtudiant from "../components/etudiant/checkout";
import Certificat from "../components/etudiant/pages/certificat";
import Releve from "../components/etudiant/pages/revele";
// import Index from "../components/mention";
import SignInSide from "../components/login/indexLogin";
import Register from "../components/login/register";
import IndexMentions from "../components/mention";
import NotFound from "../components/NotFound";
const Router = () => {
    const [tokened, setTokened] = useState();
    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<AppBarTest />} /> */}
                <Route path="/" element={<IndexEtudiant />} />
                <Route path="/*" element={<NotFound />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/login"
                    element={<SignInSide setToken={setTokened} />}
                />
                <Route path="/releve" element={<Releve />} />
                <Route path="/certificat" element={<Certificat />} />
                <Route
                    path="/user/mentions"
                    element={<IndexMentions token={tokened} />}
                />
            </Routes>
        </div>
    );
};
export default Router;
