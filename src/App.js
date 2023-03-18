import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmployeeComponent from './pages/EmployeeComponent';
import EmployeeListComponent from './pages/EmployeeListComponent';
import MainComponent from './pages/MainComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainComponent/>}/>
    <Route path="/employee" element={ <EmployeeListComponent/>}/>
    <Route path="/employee/:id" element={<EmployeeComponent/> }/>
    </Routes>
    </BrowserRouter>


 
  );
}

export default App;
