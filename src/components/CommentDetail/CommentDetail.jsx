import {  useLoaderData, useNavigate } from "react-router-dom";

const CommentDetail = () => {
    const commentWriter = useLoaderData();

    const navigate = useNavigate();
    const handleGoBack = () => {
       navigate(-1)
    }



    return (
        <div style={{border: '2px solid red', margin: '2rem 0', padding: '0.5rem'}}>
            <h3>Comment is Here: {commentWriter.name}</h3>   
            <p>From the Email: {commentWriter.email}</p> 
            <button onClick={handleGoBack}>Go Back</button>   
            <br /><br />
            <button onClick={() => navigate(`/`)}>Home</button>     
        </div>
    );
};

export default CommentDetail;