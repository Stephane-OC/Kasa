import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carrousel  from '../components/Carrousel/Carrousel'
import { getHousingById } from "../services/dataService";
import Dropdown from "../components/Dropdown/Dropdown";
import RentTag from "../components/RentTag/RentTag";
import Rating from "../components/Rating/Rating";
import "../index.css";

 /* "Logement" is a React functional component responsible for displaying detailed information              **
 ** about a specific housing location.                                                                      **
 ** Component does the following:                                                                           **
 ** - Retrieves "id" parameter from current URL using "useParams" hook.                                     **
 ** - Maintains an internal state called "data" for storing information related to housing location.        **
 ** - Utilizes "useNavigate" hook to get function to navigate to different pages.                           **
 **
 ** Upon mounting, the component:
 ** - Calls "getHousingById" function, passing retrieved "id" to fetch information about housing location.  **
 ** - If location is found, it updates "data" state with information.                                       **
 ** - If location is not found, it redirects user to an error page.                                         **
 **
 ** Component's behavior depends on "id" parameter and "navigate" function, both of which are included      */

function Logement() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const location = getHousingById(id);
    if (location) {
      setData(location);
    } else {
      navigate("/error");
    }
  }, [id, navigate]);

  return (
    <>
      {data && (
        <div className="main">
        <Carrousel  pictures={data.pictures}/>
        <section className='info-container'>
            <article className='section-header'>
                <h1 className='rent-title'>{data.title}</h1>
                <p>{data.location}</p>
                <div className='tag-wrapper'>
                    {data.tags.map((tag) => <RentTag tag={tag} key={tag} />)}
                </div>
            </article>
            <div className='owner-wrapper'>
                <div className='owner'>
                    <h2 className='owner-name'>{data.host.name}</h2>
                    <img className='owner-picture' src={data.host.picture} alt={data.host.name}/>
                </div>
                <div className='rating'>
                    {<Rating rating={data.rating} hostName={data.host.name}/>}
                </div>
            </div>
        </section>
        <section className='rent-bottom'>
            <div className='dropdown-container rent'>
                <Dropdown title='Description' content={data.description}/>
                <Dropdown title='Equipements' content={data.equipments}/>
            </div>
        </section>
    </div>
      )}
    </>
  );
}

export default Logement;
