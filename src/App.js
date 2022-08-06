import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main_Tag from "./Routes/MainTag";
import MainHeader from "./Components/MainHeader";
import MainDate from './Routes/MainDate';
import MainCaller from './Routes/MainCaller';
import NavBar from './Components/NavBar';
import LetterEditor from './Routes/LetterEditor';
import MakeTagInfo from './Routes/MakeTagInfo';
import SelectLetterType from './Routes/SelectLetterType';
import FileEditor from './Routes/FileEditor';
import SelectPaper from './Routes/SelectPaper';
function App() {
  return (
    <BrowserRouter>
      <MainHeader/>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Main_Tag />} />
        <Route path="/maindate" element={<MainDate />} />
        <Route path="/maincaller" element={<MainCaller />} />
        <Route path="/lettereditor" element={<LetterEditor />} />
        <Route path="/maketaginfo" element={<MakeTagInfo />} />
        <Route path="/selectlettertype" element={<SelectLetterType />} />
        <Route path="/fileeditor" element={ <FileEditor />} />
        <Route path="/selectpaper" element={<SelectPaper />} />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
