//import LoginForm from "./components/Login Forms2/LoginForm.jsx"
import NavigationBar from "./components/Navigation/NavigationBar.jsx";
import SignIn from "./components/Navigation/SignIn.jsx";
import SignUp from "./components/Navigation/SignUp.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <NavigationBar />
      <div className="sign-container">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
