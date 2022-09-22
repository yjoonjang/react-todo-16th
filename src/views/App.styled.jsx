import styled from 'styled-components';

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
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
`

export const TodoInput = styled.input`
  width: 400px;
  height: 28px;
  border: 2px solid #111;
  border-radius: 4px;
  padding: 4px 4px 4px 8px;
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