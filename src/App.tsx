import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginPage from 'src/pages/Login'
import NotFound from 'src/pages/NotFound'
import MainPage from 'src/pages/MainPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
export default App
