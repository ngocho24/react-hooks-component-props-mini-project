import React from "react";

function About (props) {
     return (
<aside>
    <img src={imageSrc} alt={altText}/>
    <p>{props.aboutText}</p>
</aside>
    );
}

export default About;
