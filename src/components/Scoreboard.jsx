export default function Scoreboard({ data }) {
  console.log(data);
  const allItems = [];
  allItems.push(data);

  return (
    <>
      <div className="scoreboard-header">
        <span className="scoreboard-date">Дата(ДД.ММ.ГГ)</span>
        <span className="scoreboard-distance">Пройдено км</span>
        <span className="scoreboard-actions">Действия</span>
      </div>
      <div className="scoreboard-content">
        <span>{data.date}</span>
        <span>{data.distance}</span>
      </div>
    </>
  );
}
