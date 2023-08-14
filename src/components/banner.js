import React from "react";
import "./banner.css";

/*"Banner" is a React functional component that generates a banner in your application.                             **
** It accepts a `props` object that contains following properties:                                                  **
**    
** - `className`: a CSS class that will be applied to inner div element.                                            **
** - `title`: a string that represents title to be displayed in banner.                                             **
**
** The render of this component includes a wrapping div and an inner div element with `className` passed as a prop. **
** If a `title` prop is passed to component, a h1 element containing title will also be included in render.         */

function Banner({ className, title }) {
  return (
    <div className="bannerWrapper1">
      <div id="bannerContent" className={className}></div>
      {title && <h1 className="bannerHeading">{title}</h1>}
    </div>
  );
}

export default Banner; 