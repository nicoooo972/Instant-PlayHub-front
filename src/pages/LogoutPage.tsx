import { useAuth } from "@/provider/authProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function LogoutPage() {
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/logout`);
            setToken();
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div>LogoutPage</div>
    );
}
