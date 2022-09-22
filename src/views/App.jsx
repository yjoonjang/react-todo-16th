import { ItemContainer, ItemWrapper, TodoInput, ListContainer } from "./App.styled";
import { useEffect, useState } from "react";
import TodoContent from "../components/todoContent";
import DoneContent from "../components/doneContent";

function App() {
  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  let [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    if (todoList.length !== 0) {
      localStorage.setItem('todo-list', JSON.stringify(todoList))
    }
    if (todoList && todoList.length === 0) {
      let tempArray = [];
      const itemsInTodoLocalStorage = JSON.parse(localStorage.getItem('todo-list'));
      itemsInTodoLocalStorage.forEach((item) => {
        tempArray = [...tempArray, item]
      })
      setTodoList(tempArray)
    }
  },[todoList])

  // const itemsInTodoLocalStorage = localStorage.getItem('todo-list');
  // if (todoList && todoList.length === 0) {
  //   setTodoList(...todoList, JSON.parse(itemsInTodoLocalStorage));
  // }



  const updateInLocalStorage = (type, todoInfo) => {
    // const item = JSON.parse(localStorage.getItem(`${type}`));
    const info = {
      ...JSON.parse(localStorage.getItem(`${type}`)),
      ...todoInfo,
    }
    console.log(info);
    localStorage.setItem(`${type}`, JSON.stringify(info));
  }

  const onEnterKeyPress = (event) => {
    let todoText = event.target.value;

    if (event.key === 'Enter') {
      if (todoList.includes(todoText)) {
        alert('이미 존재하는 항목입니다.')
      }
      let todoId = new Date().getTime();
      const todoInfo = {
        todoText: todoText,
        todoId: todoId,
      }
      setTodoList([...todoList, todoInfo])
      updateInLocalStorage('todo-list', todoInfo);
      event.target.value = '';

    }
  }

  // const onCheckButtonClick = () => {

  // }

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          <h1>TODO LIST!</h1>
          <TodoInput onKeyDown={onEnterKeyPress} placeholder="할 일을 적어주세요."/>
          <h1>TODO ({todoList ? todoList.length : '0'})</h1>
          <ListContainer borderColor='#FF5A00'>
            {todoList && todoList.length > 0 ? (todoList.map((todoInfo) => {
              return <TodoContent key={todoInfo.todoId} todoText={todoInfo.todoText} />
            })) : <></>}
          </ListContainer>
          <h1>Done ({doneList ? doneList.length : '0'})</h1>
          <ListContainer borderColor='#0B70FE'>
            <DoneContent />
          </ListContainer>
        </ItemWrapper>
      </ItemContainer>
    </>
  );
}

export default App;
