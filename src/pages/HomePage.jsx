//page principal
import React from "react";

import Hero from "../sections/Hero/Hero";

import SobreImpulzzeEmpresas from "../sections/SobreImpulzzeEmpresas/SobreImpulzzeEmpresas";
import CompromisoImpulzzeEmpresas from "../sections/CompromisoImpulzzeEmpresas/CompromisoImpulzzeEmpresas";
import ImpulzzeEmpresas from "../sections/ImpulzzeEmpresas/ImpulzzeEmpresas";
import ComoFuncionaEmpresas from "../sections/ComoFuncionaEmpresas/ComoFuncionaEmpresas";
import RegistrarEmpresa from "../sections/RegistrarEmpresa/RegistrarEmpresa";
import CasosDeExitoEmpresas from "../sections/CasosDeExitoEmpresas/CasosDeExitoEmpresas";


const HomePage = () => {
    return (
        <>
            <Hero />
            <CompromisoImpulzzeEmpresas />
            <SobreImpulzzeEmpresas />
            <ImpulzzeEmpresas />
            <ComoFuncionaEmpresas />
            <RegistrarEmpresa />
            {/*
            <CasosDeExitoEmpresas />
            */}
        </>
    );
};

export default HomePage;
