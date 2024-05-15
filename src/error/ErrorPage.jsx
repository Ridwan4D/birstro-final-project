import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold">This is Error</h3>
      <Link to="/">go back</Link>
    </div>
  );
};

export default ErrorPage;
