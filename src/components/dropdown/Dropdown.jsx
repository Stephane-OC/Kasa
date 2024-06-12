import PropTypes from 'prop-types';
import { useState } from "react";
import chevronUp from "../../assets/img/chevron-up.svg";
import chevronDown from "../../assets/img/chevron-down.svg";
import "./Dropdown.css";

/* "Dropdown" is a React functional component that displays a dropdown menu. The component receives **
 * its content, title and associated onClick action through its props. The dropdown visibility is   **
 * controlled by a state variable "isOpen" which is toggled when dropdown header is clicked.        **
 *
 * Props:                                                                                           **
 * - `content`: The text or content that is shown when dropdown is open.                            **
 * - `title`: The header or title of dropdown.                                                      **
 *
 * The component initializes with dropdown menu closed (i.e., "isOpen" state is false).             **
 * When header is clicked, state variable "isOpen" is toggled, and dropdown menu                    **
 * opens or closes accordingly. If dropdown is open, chevron icon points upwards; if it's           **
 * closed, it points downwards.
 * 
 * Depending on title of dropdown, content can be a list (if title is 'Equipements')                **
 * or a paragraph (for any other title).                                                            */

function Dropdown({ content, title }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  /* "formatCounter" is a utility function that formats current image index and total images for display.   **
  ** This function is primarily designed to provide a visual representation of current position of an image **
  ** in a series, which is particularly useful for image carousel components where knowing current position **
  ** of an image relative to entire collection is beneficial for end user.                                  */

  return (
    <div className='dropdown-element'>
      <div className='dropdown-nav' onClick={toggleDropdown}>
        <h3 className='dropdown-heading'>{title}</h3>
        <img src={isOpen ? chevronUp : chevronDown } alt='dropdown-chevron'/>
      </div>
      <div className={`dropdown-details ${isOpen ? "visible" : "invisible"}`}>
        {title === 'Equipements' ? <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{content}</p>}
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default Dropdown;
