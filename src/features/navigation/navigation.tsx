
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname === "/advice") {
        return (
            <button onClick={() => navigate("/")}>
                ← Back to Dashboard
            </button>
        );
    }

    return (
        <div onClick={() => navigate("/advice")}>
            Go to Advice
        </div>
    )
}