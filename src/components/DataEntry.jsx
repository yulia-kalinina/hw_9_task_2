export default function DataEntry({ onChange, onSubmit, form }) {
    
  return (
    <>
      <form onSubmit={onSubmit} className="main-form">
        <div>
          <label htmlFor="data" className="main-form-label">
            Дата(ДД.ММ.ГГ)
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
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
            onChange={onChange}
            required
          />
        </div>

        <button type="submit">ок</button>
      </form>
    </>
  );
}
