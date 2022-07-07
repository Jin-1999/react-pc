// 导入页面路由
import Layout from "./pages/Layout/index";
import Login from "./pages/Login/index";

// 导入路由
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
