import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404/404.png";

const PageNotFound = () => {
  return (
    <div className="grid justify-items-center">
      <div className="w-1/2 min-h-screen flex flex-col justify-center">
        <img src={notFoundImg} alt="" />
        <div className="flex justify-center -mt-10">
          <Link to="/">
            <button className="btn btn-primary">Go Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
