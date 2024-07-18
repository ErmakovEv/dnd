import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [people, setPeople] = useState([
    { id: 1, name: "Ivan" },
    { id: 2, name: "Semen" },
    { id: 3, name: "Jenya" },
    { id: 4, name: "Maria" }
  ]);

  const dragItem = useRef<number>(0);
  const draggedOverItem = useRef<number>(0);

  const handleSort = () => {
    const newList = [...people];
    const temp = newList[dragItem.current];
    newList[dragItem.current] = newList[draggedOverItem.current];
    newList[draggedOverItem.current] = temp;
    setPeople(newList);
  };

  return (
    <>
      <div className="drugAndDropList">
        <h1>Лист</h1>
        <div>
          {people.map((p, index) => (
            <div
              key={p.id}
              className="drugAndDropItem"
              draggable
              onDragStart={() => (dragItem.current = index)}
              onDragEnter={() => (draggedOverItem.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App
