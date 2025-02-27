import { useDispatch, useSelector } from "react-redux";
import { mainPageInfo } from "../../../Data/data.js";
import { useEffect } from "react";
import { setData } from "../../Redux/mainPageInfoSlice.js";

const Home = () => {
  const { data } = useSelector((state: any) => state.mainPageStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(mainPageInfo[0].mainHeading));
  }, []);
  return (
    <>
      <div className="w-60 h-60 bg-red-400 border rounded-md text-center hover:translate-x-1/2 transition-opacity">
        <p>{data}</p>
      </div>
    </>
  );
};

export default Home;
