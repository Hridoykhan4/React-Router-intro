import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const postStyle = {
    border: "2px solid yellow",
    padding: "1rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
  };

  const navigate = useNavigate();

  const handleShowPost = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <div style={postStyle}>
      <p>Post of Id: {post.id}</p>
      <h2 style={{ flexGrow: "1" }}>{post.title}</h2>
      <Link to={`/post/${post.id}`}>
        <button>Post Detail</button>
      </Link>
      <br />
      <button onClick={handleShowPost} style={{ alignSelf: "center" }}>
        Show Post Details
      </button>
    </div>
  );
};

export default Post;
/* 
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
