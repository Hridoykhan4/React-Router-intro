import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <h3>Navbar</h3>
      <nav>
        <li>
          <NavLink to={`/`}>Home</NavLink>
        </li>

        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
        <li>
          <NavLink to={`/posts`}>Posts</NavLink>
        </li>
        <li>
          <NavLink to={`/contact`}>Contact</NavLink>{" "}
        </li>
        <li>
          <NavLink to={`/users`}>Users</NavLink>{" "}
        </li>
        <li>
          <NavLink to={`/comments`}>Comments</NavLink>{" "}
        </li>
      </nav>
    </div>
  );
};

export default Header;
