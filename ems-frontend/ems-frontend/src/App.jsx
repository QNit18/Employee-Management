import './App.css'
import Header from './components/PageComponents/Header'
import ListEmployee from './components/ListEmployee'
import Footer from './components/PageComponents/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path='/add-employee' element={<EmployeeComponent />} />
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
