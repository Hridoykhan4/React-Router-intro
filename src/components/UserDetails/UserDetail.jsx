import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetail = () => {
  const user = useLoaderData();
  const { name } = user;
  const navigate = useNavigate()

  const handleGoBack = () => {
      navigate(-1)
  }

  return (
    <div>
      <h2>User Name is : {name}</h2>

      <br />
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetail;
