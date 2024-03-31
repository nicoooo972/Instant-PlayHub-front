import { Button } from '@/components/ui/button';
import { useAuth } from '@/provider/authProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const { token } = useAuth();
    return (
        <div>
            <h1>Home 🏠</h1>
            <Link to={"/games"}>
                <Button>Voir la liste des jeux</Button>
            </Link>
            {token && (
                <Link to={"/logout"}>
                    <Button>Déconnexion</Button>
                </Link>
            )}
        </div>
    )
}
export default Home