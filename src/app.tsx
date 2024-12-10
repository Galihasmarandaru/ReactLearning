
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Advice from '#/features/advice/advice';
import Navigation from './features/navigation/navigation';
import Dashboard from './features/dashboard';

export default function App() {

    return (
        <>
            <Router>
                <Dashboard />
                <Navigation />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/advice" element={<Advice />} />
                </Routes>
            </Router>
        </>
    )
}