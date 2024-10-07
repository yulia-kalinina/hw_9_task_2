import { useState } from "react";
import Scoreboard from "./Scoreboard";

export default function DataEntry() {
  const [form, setForm] = useState({
    date: "",
    distance: "",
  });

  const [newInput, setInput] = useState({});

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

  return (
    <>
      <form onSubmit={handleSubmit} className="main-form">
        <div>
          <label htmlFor="data" className="main-form-label">
            Дата(ДД.ММ.ГГ)
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChangeForm}
            required
          />
        </div>

        <div>
          <label htmlFor="distance" className="main-form-label">
            Пройдено км
          </label>
          <input
            id="distance"
            name="distance"
            value={form.distance}
            onChange={handleChangeForm}
            required
          />
        </div>

        <button type="submit">ок</button>
      </form>

      <Scoreboard data={newInput} />
    </>
  );
}
