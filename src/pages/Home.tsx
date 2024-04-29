
import React from 'react';
import Layout from '@/components/layout/Layout'; // Import Layout component
import { Button } from '@/components/ui/button';
import BreakoutGame from '@/components/games/BreakOutGame/BreakoutGame';

const Home = () => {
     
    return (
        <Layout> 
            <div>
                <h1>Home 🏠</h1>
                <Button>Shadnc/ui</Button>
                <BreakoutGame />
            </div>
        </Layout>
    );
}

export default Home;
