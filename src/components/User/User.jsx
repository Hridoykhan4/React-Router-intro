import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, phone } = user;
  const userStyle = {
    border: "2px solid yellow",
    padding: "1rem",
    borderRadius: "1rem",
  };
  const nav = useNavigate();

  const handleShowDetail = () => {
    nav(`/user/${user.id}`)
  }

  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <Link to={`/user/${user.id}`}>Show Details</Link>
      <br /> <br />
      <button onClick={handleShowDetail}>Show Details</button>
    </div>
  );
};

export default User;
