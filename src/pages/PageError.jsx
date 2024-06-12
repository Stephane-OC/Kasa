/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

function Error(){
    return(
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p>
                <Link to="/">Retourner sur la page d'accueil</Link>
            </p>
        </div>
    )
}
export default Error