import PhotoContextProvider from "./context/PhotoContext";
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Item from "./components/Item";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
    <PhotoContextProvider>
      <BrowserRouter>
        <Navbar /><hr/>
        <Routes>
          <Route
            exact
            path="/"
            render={() => <Navigate to="/base" replace={true}/>}
          />
          <Route path="/base" element={<Item searchTerm="base guitar" />} />
          <Route path="/nature" element={<Item searchTerm="nature" />} />
        </Routes>
      </BrowserRouter>
    </PhotoContextProvider>
    </div>
  );
}

export default App;
