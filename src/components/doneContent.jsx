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

const DoneContent = ({className, doneText, onDeleteButtonClick, onErrorButtonClick}) => {
  return (
    <DoneContainer>
      <span className='done-text'>
        {doneText || 'hi'}
      </span>
      <div className='button-wrapper'>
        <ErrorButton className={className} onClick={onErrorButtonClick} />
        <DeleteButton className={className} onClick={onDeleteButtonClick} />
      </div>
    </DoneContainer>
  );
}

export default DoneContent;

DoneContent.propTypes = {
  className: PropTypes.number,
  doneText: PropTypes.string,
  onDeleteButtonClick: PropTypes.func,
  onErrorButtonClick: PropTypes.func,
}