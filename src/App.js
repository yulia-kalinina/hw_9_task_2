import { useState } from "react";
import DataEntry from "./components/DataEntry";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const [inputs, setInput] = useState([]);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newInput = {
      date: form.date,
      distance: form.distance,
    };

    setInput((prevInputs) => ({ ...prevInputs, newInput }));

    setForm({
      date: "",
      distance: "",
    });
  };

  return (
    <div className="App">
      <DataEntry
        onChange={handleChangeForm}
        onSubmit={handleSubmit}
        form={form}
      />
      <Scoreboard data={inputs} />
    </div>
  );
}

export default App;
