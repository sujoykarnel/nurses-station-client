import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404/404.png";

const PageNotFound = () => {
  return (
    <div className="grid justify-items-center relative">
      <div className="w-1/2 md:w-1/3 min-h-screen flex flex-col justify-center">
        <img src={notFoundImg} alt="" />
        <div className="flex justify-center ">
          <Link to="/">
            <button className="btn btn-sm btn-secondary">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
