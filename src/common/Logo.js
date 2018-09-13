import React from 'react';

// const Logo = (props) => {
//   <img src={props.ruta} alt={props.altLogo}/>
// }

const Logo = ({ ruta, altLogo }) => (
  <img src={ruta} alt={altLogo} className="appLogo"/>
);

export default Logo;