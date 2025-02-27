import { useDispatch, useSelector } from "react-redux";
import { mainPageInfo } from "../../../Data/data.js";
import { useEffect } from "react";
import { setData } from "../../Redux/mainPageInfoSlice.js";

const Home = () => {
  const { data } = useSelector((state) => state.mainPageStore);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(mainPageInfo[0].mainHeading));
  }, []);
  return <div>{data}</div>;
};

export default Home;
