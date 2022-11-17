import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from '../../pages/HomePage/Index';

const RoutesManager: FC = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    )
}

export { RoutesManager };