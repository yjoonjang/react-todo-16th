import PropTypes from "prop-types";

const CheckButton = ({onClick}) => {
  return (
    <button onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="8" fill="#03C348"/>
        <g clip-path="url(#clip0_28_55)">
          <path d="M6.66657 9.85339L4.81324 8.00006L4.18213 8.62672L6.66657 11.1112L11.9999 5.77784L11.3732 5.15117L6.66657 9.85339Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_28_55">
            <rect width="10.6667" height="10.6667" fill="white" transform="translate(2.66663 2.66673)"/>
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

export default CheckButton;

CheckButton.propTypes = {
  onClick: PropTypes.func
}