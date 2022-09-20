import { useState } from "react";
import "./styles.css";

export default function App() {
  const [dark, setdark] = useState(false);
  return (
    <div className={dark ? "App dark" : "App"}>
      <nav>
        <label class="switch">
          <input type="checkbox" onChange={() => setdark(!dark)} />
          <span class="slider"></span>
        </label>
      </nav>
      <h1>{dark ? "this is dark Mode" : "this is Light Mode"}</h1>
      <h3>want to see magic ? Click on the Button</h3>
    </div>
  );
}
