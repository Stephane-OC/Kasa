import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/logo.png";
import logoFooter from "../assets/logo/footer_logo.png";
import chevronUp from '../assets/img/chevron-down.svg';
import '../index.css';

function APropos() {
    
    return (
      <div>
        <Header />
        <Banner className="bannerStyleTwo" />
        <div className='content'>
            <div className='dropdown-container about'>
                <Dropdown title='Fiabilité' content={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
                <Dropdown title='Respect' content={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
                <Dropdown title='Service' content={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                <Dropdown title='Responsabilité' content={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </div>
            </div>
        <Footer />
      </div>
    );
  }
  

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };

  return (
    <header className="App-header">
      <img src={logo} className="kasa-logo" alt="logo" />
      <nav id="navbar">
        <ul id="nav-items">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/A_Propos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Banner(props) {
    return (
      <div className="bannerWrapper2">
        <div id="bannerContent" className={props.className}></div>
      </div>
    );
  }

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} className="logo_footer" alt="logo"></img>
      <h2 className="copyrights">© 2020 Kasa. All rights reserved</h2>
    </footer>
  );
}

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

export default APropos;