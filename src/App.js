import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main_tag from "./routes/Main_tag";
import View_tags from "./routes/View_tags";
import New_tag from "./routes/New_tag";
import New_letter from "./routes/New_letter";
import './css/App.css';
import View_letter from "./routes/View_letter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="abot-us" element={<h1>Hello</h1>}/>
        <Route path="/tags/:id" element={<View_tags />}/>
        <Route path="/" element={<Main_tag />}/>
        <Route path="/newTag" element={<New_tag />}/>
        <Route path="/newLetter" element={<New_letter />}/>
        <Route path="/viewLetter" element={<View_letter/>}/>
        <Route path="/letter/:tagId/:id" element={<View_letter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;