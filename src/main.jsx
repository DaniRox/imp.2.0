import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

// 1. Reset CSS
import "../src/styles/_resert.scss";

// 2. Estilos globales de SASS
import "../src/styles/global.scss";

import App from "./App.jsx"


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
