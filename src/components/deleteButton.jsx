import PropTypes from "prop-types";

const DeleteButton = ({onClick, className}) => {
  return (
    <button className={className} onClick={onClick}>
      <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className={className} cx="8" cy="8" r="8" fill="#111111"/>
        <g className={className} clipPath="url(#clip0_28_60)">
          <path className={className} d="M11.111 5.51555L10.4843 4.88889L7.99991 7.37333L5.51546 4.88889L4.88879 5.51555L7.37324 8L4.88879 10.4844L5.51546 11.1111L7.99991 8.62666L10.4843 11.1111L11.111 10.4844L8.62657 8L11.111 5.51555Z" fill="white"/>
        </g>
          <defs className={className}>
          <clipPath className={className} id="clip0_28_60">
            <rect className={className} width="10.6667" height="10.6667" fill="white" transform="translate(2.66663 2.66666)"/>
          </clipPath>
          </defs>
      </svg>
    </button>
  )
}

export default DeleteButton;

DeleteButton.propTypes = {
  className: PropTypes.number,
  onClick: PropTypes.func
}