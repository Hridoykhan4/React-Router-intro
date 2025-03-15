import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetail = () => {
  const postDetail = useLoaderData();

    const {postId} = useParams();
    console.log(postId);

    const nav = useNavigate()

  return (
    <div>
      <h2>Do You want to see the Details, {postDetail.id}</h2>
      <p>Title: {postDetail.title}</p>
      <small>Post: {postDetail.body.slice(0,42)}</small>
      <br /><br />
      <button onClick={() => nav(-1)}> previous</button>
    </div>
  );
};

export default PostDetail;
