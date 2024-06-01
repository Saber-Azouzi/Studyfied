import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Register/ResgisterPage";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ProfilePage from "./pages/Profile/ProfilePage";
import FlashCardsPage from "./pages/FlashCards/FlashCards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuizPage from "./pages/Quiz/QuizPage";
import QuizPlayPage from "./pages/Quiz/QuizPlayPage";

// default url
const baseURL = "/Studyfied";

function App() {
  return (
    <>
      <ToastContainer />
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path={baseURL}>
            <Route path="" element={<Home />} />
            <Route path="login" element={<Login />} />
            ////// these routes should also be protected ⬇
            <Route path="flashCards" element={<FlashCardsPage />} />
            <Route path="quiz" element={<QuizPage />} />
            <Route path="quiz/play" element={<QuizPlayPage />} />
            /////// Protected routes :
            <Route element={<RequireAuth />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
  </HashRouter>,
    </>
  );
}

export default App;
