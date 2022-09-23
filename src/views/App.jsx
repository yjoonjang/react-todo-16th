import { ItemContainer, ItemWrapper, TodoInput, ListContainer } from "../styles/App.styled.jsx";
import { useEffect, useState } from "react";
import TodoContent from "../components/todoContent";
import DoneContent from "../components/doneContent";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
 
  useEffect(() => {
    if (todoList && todoList.length === 0) {
      const itemsInTodoLocalStorage = localStorage.getItem('todo-list');
      if (itemsInTodoLocalStorage) {
        setTodoList(JSON.parse(itemsInTodoLocalStorage))
      }
    }
  },[todoList])

  useEffect(() => {
    if (doneList && doneList.length === 0) {
      const itemsInDoneLocalStorage = localStorage.getItem('done-list');
      if (itemsInDoneLocalStorage) {
        setDoneList(JSON.parse(itemsInDoneLocalStorage))
      }
    }
  },[doneList])

  const onEnterKeyPress = (event) => {
    let todoText = event.target.value;
    if (event.key === 'Enter') {
      if (todoList) {
        for (let i = 0; i < todoList.length; i++) {
          if (todoList[i].todoText === todoText) {
            alert('이미 존재하는 항목입니다.')
            event.target.value = '';
            return;
          }
        }
        let tempArray = todoList;
        let todoId = new Date().getTime();
        const todoInfo = {
          todoText: todoText,
          todoId: todoId,
        }
        tempArray = [...tempArray, todoInfo]
        setTodoList(tempArray);
        localStorage.setItem('todo-list', JSON.stringify(tempArray));
        event.target.value = '';
      }
    }
  }

  const onCheckButtonClick = (e) => {
    const id = e.target.className.baseVal;
    let todoTempList = todoList;
    let doneTempList = doneList;

    todoTempList = todoList.filter((item) => {
      if (JSON.stringify(item.todoId) === id) {
        doneTempList = [...doneTempList, {
          todoText: item.todoText,
          todoId: item.todoId,
        }]
      }
      return (JSON.stringify(item.todoId) !== id);
    });

    setTodoList(todoTempList);
    setDoneList(doneTempList)
    localStorage.setItem('todo-list', todoTempList);
    localStorage.setItem('done-list', JSON.stringify(doneTempList));
  }

  const onErrorButtonClick = (e) => {
    const id = e.target.className.baseVal;
    let todoTempList = todoList;
    let doneTempList = doneList;

    doneTempList = doneList.filter((item) => {
      if (JSON.stringify(item.todoId) === id) {
        todoTempList = [...todoTempList, {
          todoText: item.todoText,
          todoId: item.todoId,
        }]
      }
      return JSON.stringify(item.todoId) !== id;
    });

    setTodoList(todoTempList);
    setDoneList(doneTempList);
    localStorage.setItem('todo-list', JSON.stringify(todoTempList));
    localStorage.setItem('done-list', doneTempList);
  }

  const onDeleteButtonClick = (e, type) => {
    const id = e.target.className.baseVal;
    if (type === 'todo') {
      let tempList = todoList;
      tempList = todoList.filter((item) => JSON.stringify(item.todoId) !== id);
      localStorage.setItem('todo-list', tempList);
      setTodoList(tempList);
    }
    else {
      let tempList = doneList;
      tempList = doneList.filter((item) => JSON.stringify(item.todoId) !== id);
      setDoneList(tempList);
      localStorage.setItem('done-list', tempList);
    }
  }

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          <h1>TODO LIST!</h1>
          <TodoInput onKeyPress={onEnterKeyPress} placeholder="할 일을 적어주세요."/>
          <h1>TODO ({todoList ? todoList.length : '0'})</h1>
          <ListContainer borderColor='#FF5A00'>
            {todoList && todoList.length > 0 ? (todoList.map((todoInfo) => {
              return (
                <TodoContent 
                  className={todoInfo.todoId} 
                  key={todoInfo.todoId} 
                  todoText={todoInfo.todoText} 
                  onCheckButtonClick={onCheckButtonClick}
                  onDeleteButtonClick={(e) => onDeleteButtonClick(e, 'todo')} 
                />
              )
            })) 
                : 
              <></>
            }
          </ListContainer>
          <h1>Done ({doneList ? doneList.length : '0'})</h1>
          <ListContainer borderColor='#0B70FE'>
            {doneList && doneList.length > 0 ? (doneList.map((todoInfo) => {
              return (
                <DoneContent 
                  className={todoInfo.todoId} 
                  key={todoInfo.todoId} 
                  doneText={todoInfo.todoText} 
                  onDeleteButtonClick={(e) => onDeleteButtonClick(e, 'done')} 
                  onErrorButtonClick={onErrorButtonClick}
                />
              )
            })) 
                : 
              <></>
            }
          </ListContainer>
        </ItemWrapper>
      </ItemContainer>
    </>
  );
}

export default App;
