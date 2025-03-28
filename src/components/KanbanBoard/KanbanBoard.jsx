import React, { useState } from 'react'

export default function KanbanBoard() {
  return (
    <div className='kanbanBoard'>
      <Board/>
    </div>
  )
}

function Board() {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <>
      <GoalColumn 
        colTitle="Goals"
        headingColor="aqua"
        >
        
        </GoalColumn>
      <Column 
        title="TODO"
        column="todo"
        headingColor="blue"
        card={cards}
        setCards={setCards}
        ></Column>

      <Column 
        title="DOING"
        column="doing "
        headingColor="yellow "
        card={cards}
        setCards={setCards}
        ></Column>      
      
      <Column 
        title="DONE"
        column="done"
        headingColor="green"
        card={cards}
        setCards={setCards}
        ></Column>    
      </>
  )
}
function Column({title, column, headingColor, card, setCards}) {
  return (
    <div className='kanban-column-wrapper'>
      <h3><span className='dot'></span>{title}</h3> 
      <div className='kanban-column'>
        {/* {card.map((item, index)=> {
          <Row title={card[index].title}></Row>
        })} */}
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
      </div>
    
    </div>
  )
}
function GoalColumn({title}) {
  return (
    <div className='kanban-column-wrapper'>
      <h3><span className='dot'></span>{title}</h3> 
      <div className='kanban-column'>
        <GoalRow></GoalRow>
        <GoalRow></GoalRow>
        <GoalRow></GoalRow>
      </div>
    
    </div>
  )
}

function Row({title}){
  return (
    <div className='kanban-row'>
      <h4>HEy</h4>
    </div>
  )
}
function GoalRow(){
  return (
    <div className='kanban-goal-row'>
      <h4>Launch Monior</h4>
    </div>
  )
}
const DEFAULT_CARDS = [
  { title: "Test The application", id: "1", column: "todo" },
  { title: "Optmize the perfomance", id: "2", column: "todo" },
  { title: "launch and Monitor", id: "3", column: "todo" },
  { title: "conduct traning Sessions", id: "4", column: "todo" },

  { title: "Front End Dev", id: "5", column: "progress" },
  { title: "Setup Backend functionality", id: "6", column: "progress" },
  { title: "Handle change Rquest", id: "7", column: "progress" },
  { title: "add some Features", id: "8", column: "progress" },

  { title: "Set up Dev Env", id: "9", column: "done" },
  { title: "plan the Project", id: "10", column: "done" },
  { title: "Choose a Tech Stack", id: "11", column: "done" },
  { title: "Create Responsive Design", id: "12", column: "done" },
  { title: "Implement Version control", id: "13", column: "done" },
];