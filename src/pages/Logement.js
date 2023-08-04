import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHousingById } from "../services/dataService";
import Dropdown from "../components/dropdown";
import RentTag from "../components/rentTag";
import "../index.css";
import solidStar from "../assets/img/star-solid.svg";
import blankStar from "../assets/img/star-empty.svg";

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

  /* "Rating" is a React functional component that displays a visual rating using stars.                    **
  ** It receives a single prop:                                                                             **
  ** - "rating", which is a numeric value between 0 and 5. It represents rating to be displayed.            **
  *
  * Component maps over an array of 5 elements, rendering an image of a solid star for each                 **
  * point in rating, and a blank star for remaining points.                                                 **
  *
  * Each star's image is determined based on whether rating is greater than or equal to current index + 1.  **
  * If it is, a solid star image is used; otherwise, a blank star image is used.                            **
  *
  * Alt text for each image includes host's name and word "rating". 
  *                                         */
  function Rating({ rating }) {
    return (
      <>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={rating >= index + 1 ? solidStar : blankStar}
            alt={`${data.host.name} rating`}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {data && (
        <div className="main">
        
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
                    {<Rating rating={data.rating}/>}
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
