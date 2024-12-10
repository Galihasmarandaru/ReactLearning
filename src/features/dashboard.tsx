import { useLocation } from "react-router-dom";

export default function Dashboard() {
    const location = useLocation();
    return (location.pathname === "/") && <h1>Welcome to Dashboard</h1>
}