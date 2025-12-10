// src/layouts/FreelancerLayout/FreelancerLayout.jsx

import { Outlet } from 'react-router-dom';

// Importa los componentes personalizados para freelancers
import NavbarFreelancers from '../../sections/NavbarFreelancers/NavbarFreelancers';
import FooterFreelancers from '../../sections/FooterFreelancers/FooterFreelancers';

const FreelancerLayout = () => {
    return (
        <>
            <NavbarFreelancers />

            <main>
                <Outlet />
            </main>

            <FooterFreelancers />
        </>
    );
};

export default FreelancerLayout;