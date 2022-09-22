import styled from 'styled-components'
import PropTypes from 'prop-types'
import CheckButton from './checkButton'
import DeleteButton from './deleteButton'

const TodoContainer = styled.div`
  display: flex;
  /* gap: 4px; */
  align-items: center;
  justify-content: space-between;
  vertical-align: center;

  & .button-wrapper {
    display: flex;
    gap: 8px;
  }
`

const TodoContent = ({todoText, onCheckButtonClick, onDeleteButtonClick}) => {
  return (
    <TodoContainer>
      <span>
        {todoText || 'hi'}
      </span>
      <div className='button-wrapper'>
        <CheckButton onClick={onCheckButtonClick} />
        <DeleteButton onClick={onDeleteButtonClick}/>
      </div>
    </TodoContainer>
  );
}

export default TodoContent;

TodoContent.propTypes = {
  todoText: PropTypes.string,
  onCheckButtonClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func,
}