import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={"/dashboard/*"} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}
export default App