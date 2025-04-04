import React, { useState } from "react";
import {motion} from "framer-motion"

export default function KanbanBoard() {
  return (
    <div className="kanbanBoard">
      <Board />
    </div>
  );
}

function Board() {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <>
      {/* <GoalColumn colTitle="Goals" headingColor="aqua"></GoalColumn> */}
      <Column
        title="TODO"
        column="todo"
        headingColor="blue"
        cards={cards}
        setCards={setCards}
      ></Column>

      <Column
        title="on progress"
        column="on progress"
        headingColor="yellow"
        cards={cards}
        setCards={setCards}
      ></Column>

      <Column
        title="DONE"
        column="done"
        headingColor="green"
        cards={cards}
        setCards={setCards}
      ></Column>
    </>
  );
}
function Column({ title, column, headingColor, cards, setCards }) {
  const [columnActive, setColumnActive] = useState(false);
  const filterCards = cards.filter((card) => card.column === column);
  
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id)
  }
  const handleDragOer = (e) => {
    e.preventDefault();
    highLightIndicator(e)
    setColumnActive(true)
  }
  const highLightIndicator = (e) => {
    const indicators = getIndicators();//indicator based on the column
    clearHighlights(indicators)
    const el = getNearestIndicator(e, indicators)
    el.element.style.opacity = "1"
  }

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i)=> {
      i.style.opacity = "0"

    })
  }

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset){
          return { offset: offset, element: child}
        }else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1]
      }
    )
    return el;
  }

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`
      [data-column="${column}"]`))//it got the indicator for the column
  }

  const handleDragLeave = () => {
    setColumnActive(false)
    clearHighlights()
  }
  const handleDragEnd = (e) => {
    setColumnActive(false)
    clearHighlights();

    const cardId = e.dataTransfer.getData("cardId")

    const indicators = getIndicators();
    const {element} = getNearestIndicator(e, indicators);
    
    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId)

      if (!cardToTransfer) return;

      cardToTransfer = {...cardToTransfer, column}

      copy = copy.filter((c)=> c.id !== cardId)

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer)
      } else {
        const insertAtIndex = copy.findIndex((el)=> el.id === before);
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy)
    }
  }
  return (
    <div className="kanban-column-wrapper">
      <h3>
        <span
          className="dot"
          style={{
            backgroundColor: headingColor,
          }}
        ></span>
        {title}
      </h3>
      <div
        className="kanban-column"
        onDragOver={handleDragOer}
        onDragLeave={handleDragLeave}
        onDrop={handleDragEnd}
        style={{
          backgroundColor: columnActive && "#1B1B1B",
        }}
      >
        {filterCards.map((card) => {
          return <Card key={card.id} {...card} handleDragStart={handleDragStart}></Card>; //the destructuring cause to create 3 props title, id, column
        })}
      </div>
    </div>
  );
}

function Card({ title, column, id, handleDragStart }) {
  return (
    <>
      <DropIndicator beforeId={id} column={column}></DropIndicator>
      <motion.div 
        layout
        layoutId={id}
        onDragStart={(e) => handleDragStart(e, {title, id, column})}
        draggable="true" 
        className="card">
        <h4>{title}</h4>
      </motion.div>
    </>
  );
}
function DropIndicator({beforeId, column }) {
  return (
    <>
      <div 
        data-before={beforeId || "-1"}  
        data-column = {column}
        className="drop-indicator">
      </div>
    </>
  );
}

function GoalColumn({ title }) {
  return (
    <div className="kanban-column-wrapper">
      <h3>
        <span className="dot"></span>
        {title}
      </h3>
      <div className="kanban-column">
        <GoalRow>Team Goals</GoalRow>
        <GoalRow>Launch Mointor</GoalRow>
        <GoalRow>Hi</GoalRow>
      </div>
    </div>
  );
}

function GoalRow({children}) {
  return (
    <div className="kanban-goal-row">
      <h4>{children}</h4>
    </div>
  );
}
const DEFAULT_CARDS = [
  // { title: "Test The application", id: "1", column: "todo" },
  // { title: "Optmize the perfomance", id: "2", column: "todo" },
  { title: "launch and Monitor", id: "3", column: "todo" },
  { title: "conduct traning Sessions", id: "4", column: "todo" },

  { title: "Front End Dev", id: "5", column: "on progress" },
  // { title: "Setup Backend functionality", id: "6", column: "on progress" },
  { title: "Handle change Rquest", id: "7", column: "on progress" },
  { title: "add some Features", id: "8", column: "on progress" },

  { title: "Set up Dev Env", id: "9", column: "done" },
  { title: "plan the Project", id: "10", column: "done" },
  // { title: "Choose a Tech Stack", id: "11", column: "done" },
  { title: "Create Responsive Design", id: "12", column: "done" },
  // { title: "Implement Version control", id: "13", column: "done" },
];
