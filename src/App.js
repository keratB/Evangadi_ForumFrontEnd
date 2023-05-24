import axios from 'axios';
import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { UserContext } from './context/UserContext';
import Header1 from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Components/Footer/Footer';
import Que from './Pages/AskQuestion/AskQuestion'
import AnswerQuestion from './Pages/QuestionDetail/QuestionDetail';

function App() {
  const [userData, setUserData] = useContext(UserContext);

  const checkLoggedIn = async () => {
    let token = localStorage.getItem('auth-token');
    if (token === null) {
      localStorage.setItem('auth-token', '');
      token = '';
    } else {
      try {
        const userRes = await axios.get(
          `${process.env.REACT_APP_base_url}/user`,
          {
            headers: { "x-auth-token": token },
          }
        );
        // console.log(userRes);
        setUserData({
          token,
          user: {
            id: userRes.data.data.user_id,
            display_name: userRes.data.data.user_name
          }
        })
      } catch (err) {
      console.log(err);
      }
    }
  }
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <Header1 logout={logout} />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home logout={logout} />} />
        <Route path="/ask-question" element={<Que />} />
        <Route path="/questions/:id" element={<AnswerQuestion />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App;
