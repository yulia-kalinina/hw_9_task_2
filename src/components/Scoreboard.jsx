import EditPng from "./../img/edit.png";
import CancelPng from "./../img/cancel.png";

export default function Scoreboard({ onDeletedItem, data }) {

  return (
    <div>
      <table className="scoreboard-table">
        <thead>
          <tr className="scoreboard-table-header">
            <th>Дата (ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index.toString()}>
                <td> {item.date}</td>
                <td> {item.distance}</td>
                <td>
                  <input
                    type="image"
                    src={EditPng}
                    style={{ width: 16 }}
                    alt="Изменить показания"
                  />
                  <input
                    type="image"
                    src={CancelPng}
                    style={{ width: 16 }}
                    onClick={() => onDeletedItem(item)} 
                    alt="Удалить показания"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
