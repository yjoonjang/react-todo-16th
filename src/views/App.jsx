import { ItemContainer, ItemWrapper, TodoInput, ListContainer } from "./App.styled";
import { useEffect, useState } from "react";
import TodoContent from "../components/todoContent";
import DoneContent from "../components/doneContent";

function App() {
  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const itemsInTodoLocalStorage = JSON.parse(localStorage.getItem('todo-list'));
  if (todoList.length === 0) {
    setTodoList(...todoList, itemsInTodoLocalStorage)
  }

  console.log(todoList);
  const updateInLocalStorage = (type, todoInfo) => {
    const item = localStorage.getItem(`${type}`)
    const info = {
      ...JSON.parse(item),
      ...todoInfo
    }
    localStorage.setItem(`${type}`, info)
  }

  const onEnterKeyPress = (event) => {
    let todoText = event.target.value;

    if (event.key === 'Enter') {
      let todoId = new Date().getTime();
      const todoInfo = {
        todoText: todoText,
        todoId: todoId,
      }
      setTodoList([...todoList, todoInfo])
      updateInLocalStorage('todo-list', todoInfo)
      event.target.value = '';

    }
  }

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          <h1>TODO LIST!</h1>
          <TodoInput onKeyDown={onEnterKeyPress} placeholder="할 일을 적어주세요."/>
          <h1>TODO ({todoList.length})</h1>
          <ListContainer borderColor='#FF5A00'>
            {todoList.map((todoInfo) => {
              return <TodoContent todoText={todoInfo.todoText} />
            })}
          </ListContainer>
          <h1>Done ({doneCount})</h1>
          <ListContainer borderColor='#0B70FE'>
            <DoneContent />
          </ListContainer>
        </ItemWrapper>
      </ItemContainer>
    </>
  );
}

export default App;
