import "./styles.css";
import App from "./App.svelte";

const element = document.getElementById("app");
const app = element && new App({ target: element });

export default app;