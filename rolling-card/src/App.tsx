import { Route, Routes } from "react-router-dom";
import Layout from "./client/Pages/Layout/Layout";
import Home from "./client/Pages/Home/Home";
import NotFound from "./client/Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
