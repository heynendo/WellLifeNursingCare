// src/pages/NotFound.jsx
import { useNavigate } from "react-router-dom"

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <main className="not-found page-layout">
            <h1>Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <button onClick={() => navigate('/')}><h3>Back to Home</h3></button>
        </main>
    )
}