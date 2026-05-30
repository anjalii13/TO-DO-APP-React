import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTaskForm from './components/CreateTaskForm'
import EditForm from "./components/EditForm";


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
<Route path='/create' element={<CreateTaskForm />} />
<Route path='/edit/:id' element={<EditForm />} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
