import { useState } from "react";
import DataEntry from "./components/DataEntry";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const [input, setInput] = useState({});

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setInput((prevInput) => ({
      ...prevInput,
      date: form.date,
      distance: form.distance,
    }));

    setForm({
      date: "",
      distance: "",
    });
  };

  const arrOfInputs = [];
  arrOfInputs.push(input);

  return (
    <div className="App">
      <DataEntry
        onChange={handleChangeForm}
        onSubmit={handleSubmit}
        form={form}
      />
      <Scoreboard data={arrOfInputs} />
    </div>
  );
}

export default App;
