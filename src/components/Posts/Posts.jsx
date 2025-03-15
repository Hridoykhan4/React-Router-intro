import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData().slice(0,15);
    return (
        <div>
            <h3>Posts: {posts.length}</h3>            
            <div className="users">
                {
                    posts.map((post) => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;