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

  inputs.sort((a, b) => {
    if (a.date < b.date) {
      return -1;
    }
    if (a.date > b.date) {
      return 1;
    }
    return 0;
  });

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();

    const findInput = inputs.find((el) => el.date === form.date);
    if (findInput !== undefined) {
      findInput.distance = +findInput.distance + +form.distance;
    } else {
      const newInput = {
        date: form.date,
        distance: form.distance,
      };
      setInput((prevInput) => [...prevInput, newInput]);
    }

    setForm({
      date: "",
      distance: "",
    });
  };

  const handleDeleteItem = (item) => {
    setInput((prevInput) => inputs.filter((elem) => elem.date !== item.date));
  };

  return (
    <div className="App">
      <DataEntry
        onChange={handleChangeForm}
        onSubmit={handleSubmit}
        form={form}
      />
      <Scoreboard
        onDeletedItem={handleDeleteItem}
        data={inputs}
      />
    </div>
  );
}

export default App;
