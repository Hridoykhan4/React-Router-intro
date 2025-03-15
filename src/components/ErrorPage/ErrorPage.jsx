import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Oops!!!</h2>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      {error.status === 404 && <div>
        
        <h3>Sorry Page is unavailable</h3>
        <Link to="/">Go Home</Link>
        </div>}
    </div>
  );
};

export default ErrorPage;
