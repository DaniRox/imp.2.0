//page para freelancers
import React from "react";

import HeroFreelancers from "../sections/HeroFreelancers/HeroFreelancers";
import GarantiaImpulzzeFreelancers from "../sections/GarantiaImpulzzeFreelancers/GarantiaImpulzzeFreelancers";
import ImpulzzeFreelancers from "../sections/ImpulzzeFreelancers/ImpulzzeFreelancers";
import ComoFuncionaFreelancers from "../sections/ComoFuncionaFreelancers/ComoFuncionaFreelancers";
import RegistrarFreelancers from "../sections/RegistrarFreelancers/RegistrarFreelancers";
import ComunidadImpulzzeFreelancers from "../sections/ComunidadImpulzzeFreelancers/ComunidadImpulzzeFreelancers";
import CompromisoImpulzzeFreelancers from "../sections/CompromisoImpulzzeFreelancers/CompromisoImpulzzeFreelancers";
import CasosDeExitoFreelancers from "../sections/CasosDeExitoFreelancers/CasosDeExitoFreelancers";


const HomePage = () => {
    return (
        <>
            <HeroFreelancers />
            <CompromisoImpulzzeFreelancers />
            <ImpulzzeFreelancers />
            <ComoFuncionaFreelancers />
            {/*Garantia Impulzze*/}
            <GarantiaImpulzzeFreelancers />
            {/*Comunidad Impulzze*/}
            <ComunidadImpulzzeFreelancers />
            <RegistrarFreelancers />
            <CasosDeExitoFreelancers />
        </>
    );
};

export default HomePage;
