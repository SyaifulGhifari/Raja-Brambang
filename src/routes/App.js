import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import DetailProduct from "../pages/DetailProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='detail/:id' element={<DetailProduct/>} />
        <Route path='*' element={<h1>404 Error Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;