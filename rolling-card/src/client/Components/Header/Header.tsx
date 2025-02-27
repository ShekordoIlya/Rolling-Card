import { useDispatch } from "react-redux";
import { mainPageInfo } from "../../../Data/data.js";
import { setData } from "../../Redux/mainPageInfoSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="w-screen h-16 bg-cyan-800">
      <div className="flex justify-around h-full items-center">
        <div>RollingCard</div>
        <ul className="flex gap-20 justify-between items-center h-full ">
          <li
            onClick={() => {
              dispatch(setData(mainPageInfo[1].mainHeading));
            }}
            className="cursor-pointer h-full content-center hover:border-b-4 hover:border-lime-400"
          >
            first
          </li>
          <li
            onClick={() => {
              dispatch(setData(mainPageInfo[2].mainHeading));
            }}
            className="cursor-pointer h-full content-center hover:border-b-4 hover:border-lime-400"
          >
            second
          </li>
          <li
            onClick={() => {
              dispatch(setData(mainPageInfo[3].mainHeading));
            }}
            className="cursor-pointer h-full content-center hover:border-b-4 hover:border-lime-400"
          >
            third
          </li>
        </ul>
        <div>
          <button className="bg-orange-500 p-2 hover:bg-amber-300 transition duration-[400ms] rounded-md hover:scale-x-105">
            Quick start
          </button>
        </div>
        <div>
          <button>SignIn/SignUP</button>
        </div>
      </div>
    </header>
  );
};
export default Header;
