import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from 'src/pages/Login/index'
import NotFound from 'src/pages/NotFound/index'
import MainPage from 'src/pages/MainPage/index'

function App() {
    return (
        <Router>
            <Routes>
                <Route index element={<MainPage />} />
                <Route exact path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
export default App
