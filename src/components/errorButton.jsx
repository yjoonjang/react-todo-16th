import PropTypes from "prop-types";

const ErrorButton = ({onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      <svg className={className}  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle className={className}  cx="8" cy="8" r="8" fill="#FF5A00" fillOpacity="0.7"/>
        <path className={className}  d="M7.33337 11.448H9.00932V9.95467H7.33337V11.448ZM7.46593 9.13333H8.88622L9.00932 5.064V4H7.33337V5.064L7.46593 9.13333Z" fill="white"/>
      </svg>
    </button>
  )
}

export default ErrorButton;

ErrorButton.propTypes = {
  className: PropTypes.number,
  onClick: PropTypes.func
}