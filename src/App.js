import "./App.css";
import FormInput from "./components/FormInput";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  console.log(username);
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUsername={setUsername} />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <FormInput placeholder="Sth else" />
      </form>
    </div>
  );
}

export default App;
