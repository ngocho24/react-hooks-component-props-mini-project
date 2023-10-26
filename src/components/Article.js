// import React from "react";

// function Article (props){
//     const formattedDate = "January 1, 1970"
//     return(
// <article>
// <h3>{props.title}</h3>
// <small>{props.formattedDate}</small>
// <p>{props.preview}</p>
// </article>
//     );
// }

import React from "react";

function Article(props) {
    const { title, date, preview } = props;
    const formattedDate = date || 'January 1, 1970';
    
    return (
      <article>
        <h3>{title}</h3>
        <small>{formattedDate}</small>
        <p>{preview}</p>
      </article>
    );
  }
  export default Article;