import styled from 'styled-components'
import PropTypes from 'prop-types'
import DeleteButton from './deleteButton'
import ErrorButton from './errorButton'

const DoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: center;

  & .button-wrapper {
    display: flex;
    gap: 8px;
  }
`

const DoneContent = ({doneText, onDeleteButtonClick, onErrorButtonClick}) => {
  return (
    <DoneContainer>
      <span className='done-text'>
        {doneText || 'hi'}
      </span>
      <div className='button-wrapper'>
        <DeleteButton onClick={onDeleteButtonClick} />
        <ErrorButton onClick={onErrorButtonClick} />
      </div>
    </DoneContainer>
  );
}

export default DoneContent;

DoneContent.propTypes = {
  doneText: PropTypes.string,
  onDeleteButtonClick: PropTypes.func,
  onErrorButtonClick: PropTypes.func,
}