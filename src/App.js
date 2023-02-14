import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index.tsx';
import LoginPage from './pages/Login/index'
import NotFound from './pages/NotFound/index'
import MainPage from './pages/MainPage/index'
import './common/styles/style.sass'

function App() {
  return (
        <Router>
            <Layout/>
            <Routes>
                <Route index element={<MainPage />} />
                <Route exact path="login" element={<LoginPage/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
  );
}
export default App;