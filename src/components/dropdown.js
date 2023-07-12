import chevronUp from "../assets/img/chevron-up.svg";

import "./dropdown.css";

function Dropdown(props) {
  const content = props.content;
  const title = props.title;

  return (
    <div className='dropdown-element'>
      <div className='dropdown-nav'>
        <h3 className='dropdown-heading'>{title}</h3>
        <img src={chevronUp} alt='dropdown-chevron'/>
      </div>
      <div className='dropdown-details visible'>
        {title === 'Equipements' ? <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{content}</p>}
      </div>
    </div>
  )
}

export default Dropdown;
