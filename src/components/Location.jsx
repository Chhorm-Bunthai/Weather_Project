import React from "react";

function Location({ onLocation }) {
  const nameOfCity = onLocation && onLocation.name ? onLocation.name : null;
  const CountryName =
    onLocation && onLocation.sys && onLocation.sys.country
      ? onLocation.sys.country
      : null;

  // console.log(onLocation)
  return (
    <div className="location">
      {onLocation ? <h1 className="city">{nameOfCity}</h1> : null}
      {onLocation ? <p>{CountryName}</p> : null}
    </div>
  );
};

export default Location;
