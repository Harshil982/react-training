import './App.css';
import Blobs from './Components/Blobs';
import CreateNote from './Components/CreateNote';
import Posts from './Components/Posts';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';

export const DataContext = createContext()

function App() {
  const [Data, setData] = useState("Data")
  return (
    <DataContext.Provider value={Data} >
      <BrowserRouter>
      {/* <Blobs /> */}
        <Header />
        <Routes>
          <Route path="/createNote" element={<CreateNote />} />
          <Route path="/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
