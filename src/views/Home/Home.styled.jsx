import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 4px;
  align-items: center;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  padding: 20px;
  border: 2px solid #111;
  border-radius: 4px;
  height: 95vh;
`

export const TodoInput = styled.input`
  width: 400px;
  height: 32px;
  font-size: 16px;
  border: 2px solid #111;
  border-radius: 4px;
  padding: 8px;
`

export const ListContainer = styled.div.attrs((props) => ({
  borderColor: props.borderColor,
}))`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 400px;
  height: 200px;
  overflow-y: scroll;
  border: 2px solid ${(props) => props.borderColor};
  padding: 8px;
  border-radius: 4px;

  & .done-text {
    text-decoration:line-through;
  }
`