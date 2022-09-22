import { ItemContainer, ItemWrapper, TodoInput, ListContainer } from "./App.styled";
import { useState } from "react";

function App() {
  const [todoCount, setTodoCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);

  return (
    <>
      <ItemContainer>
        <ItemWrapper>
          <h1>TODO LIST!</h1>
          <TodoInput placeholder="할 일을 적어주세요."/>
          <h1>TODO ({todoCount})</h1>
          <ListContainer borderColor='#FF5A00'>
            d
          </ListContainer>
          <h1>Done ({doneCount})</h1>
          <ListContainer borderColor='#0B70FE'>
            d
          </ListContainer>
        </ItemWrapper>
      </ItemContainer>
    </>
  );
}

export default App;
