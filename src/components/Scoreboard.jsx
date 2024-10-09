import EditPng from "./../img/edit.png";
import CancelPng from "./../img/cancel.png";

export default function Scoreboard({ data }) {

   console.log(data);

  return (
    <>
      <div className="scoreboard-header">
        <span className="scoreboard-date">Дата(ДД.ММ.ГГ)</span>
        <span className="scoreboard-distance">Пройдено км</span>
        <span className="scoreboard-actions">Действия</span>
      </div>
      <div className="scoreboard-content">
        {data.map((item) => {
          return (
            <>
              <span>{item.date}</span>
              <span>{item.distance}</span>
              <div>
                <input
                  type="image"
                  src={EditPng}
                  style={{ width: 16 }}
                  alt="Изменить"
                />
                <input
                  type="image"
                  src={CancelPng}
                  style={{ width: 16 }}
                  alt="Удалить"
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
