import { Link, useNavigate } from "react-router-dom";

const Comment = ({ comment }) => {
  const { name, email, id } = comment;

  const navigate = useNavigate();

  const handleShowDetail = () => {
    navigate(`/comment/${id}`);
  };

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "0.6rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>Name: {name}</h3>
      <p style={{ flexGrow: "1" }}>Mail: {email}</p>
      <Link to={`/comment/${id}`}>
        <button>Click Me</button>
      </Link>
      <br />
      <button onClick={handleShowDetail} style={{ alignSelf: "center" }}>
        Click To see Detail
      </button>
    </div>
  );
};

export default Comment;

/* 
{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
}
*/
