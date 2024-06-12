import PropTypes from 'prop-types';
import "./Rating.css";
import solidStar from "../../assets/img/star-solid.svg";
import blankStar from "../../assets/img/star-empty.svg";

/* "Rating" is a React functional component that displays a visual rating using stars.                    **
 ** It receives a single prop:                                                                            **
 ** - "rating", which is a numeric value between 0 and 5. It represents rating to be displayed.           **
 ** Component maps over an array of 5 elements, rendering an image of a solid star for each               **
 ** point in rating, and a blank star for remaining points.                                               **
 * Each star's image is determined based on whether rating is greater than or equal to current index + 1. **
 * If it is, a solid star image is used; otherwise, a blank star image is used.                           */

function Rating({ rating, hostName }) {
    return (
        <>
            {[...Array(5)].map((_, index) => (
                <img
                    key={index}
                    src={rating >= index + 1 ? solidStar : blankStar}
                    alt={`${hostName} rating`}
                />
            ))}
        </>
    );
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
    hostName: PropTypes.string.isRequired,
};

export default Rating;
