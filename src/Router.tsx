import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./containers/Top";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
