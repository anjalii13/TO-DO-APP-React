import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTaskForm from './components/CreateTaskForm'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
<Route path='/create' element={<CreateTaskForm />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
