import "./index.css";

// Render the App component to the root element
import ReactDOM from "react-dom/client"
import App from "./App"

const div = document.getElementById("root")
const root = ReactDOM.createRoot(div)
root.render(<App />);