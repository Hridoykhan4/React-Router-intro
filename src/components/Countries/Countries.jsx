import { Link, NavLink, useLoaderData } from "react-router-dom";

const Countries = () => {
  const allCountries = useLoaderData();

  const countriesStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "1rem",
  };

  const cardStyle = {
    border: "2px solid red",
    borderRadius: "1rem",
    padding: "1rem",
  };

  return (
    <div>
      <h3>Welcome To All Countries</h3>
      <div style={countriesStyle}>
        {allCountries.map((country) => (
          <div style={cardStyle}>
            <img
              style={{ height: "200px", width: "100%" }}
              src={country?.flags?.png}
              alt=""
            />
            <h3>{country?.name?.common}</h3>
            <p>Region: {country?.region}</p>
            <p>Population: {country?.population}</p>
            <NavLink to={`/country/${country.ccn3}`}>Show Details</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

