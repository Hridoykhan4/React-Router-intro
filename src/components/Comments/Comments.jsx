import { useLoaderData } from "react-router-dom";
import Comment from "../Comment/Comment";

const Comments = () => {
  const allComments = useLoaderData();
  const reduceComments = allComments.slice(0, 20);
  return (
    <div>
      <h2>Total Comments are: {reduceComments.length}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {reduceComments.map((comment) => (
          <Comment key={comment.id} comment={comment}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
