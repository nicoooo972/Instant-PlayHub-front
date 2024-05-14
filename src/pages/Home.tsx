
import React from 'react';
import Layout from '@/components/layout/Layout'; // Import Layout component
import { Button } from '@/components/ui/button';
import { useAuth } from '@/provider/authProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { token } = useAuth();
    return (
        <Layout> 
            <div>
                <h1>Home 🏠</h1>
                <Button>Shadnc/ui</Button>
                <Link to={"/games"}>
                <Button>Voir la liste des jeux</Button>
            </Link>
            {token && (
                <Link to={"/logout"}>
                    <Button>Déconnexion</Button>
                </Link>
            )}
            </div>
        </Layout>
    );
}

export default Home;
