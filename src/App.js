
import './App.css';
import ImageList from './component/ImageList/ImageList';
import {
  BrowserRouter , Routes,
  Route,
  Link
}from "react-router-dom";
import ImageDetail from './component/ImageDetail/ImageDetail';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/photos/:id' element={<ImageDetail />} />
    <Route index element={<ImageList />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
