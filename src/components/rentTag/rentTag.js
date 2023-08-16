import "./rentTag.css";

/* "RentTag" is a React functional component that represents a single tag for a rental property.    **
**                                                                                                  **
** Component is responsible for:                                                                    **
** - Receiving "tag" prop directly, which is a string representing characteristic or                **
**   feature of a rental property.                                                                  **
** - Rendering tag inside a "div" element with class name 'tag'.                                    **
**                                                                                                  **
** Component can be used to visually categorize properties based on certain attributes or features. **
** For example, it might be used to display tags like "WiFi," "Pet-Friendly," etc., associated with **
** a rental property.                                                                               */

function RentTag({ tag }) {
    return (
        <div className='tag'>
            {tag}
        </div>
    );
}

export default RentTag;