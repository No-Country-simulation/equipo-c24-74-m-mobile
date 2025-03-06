import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage.jsx'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.jsx'
import DashboardPage from '../pages/DashboardPage.jsx'
import DownloadedReportsPage from '../pages/DownloadedReportsPage.jsx';


const RoutesApp = () => {
return (
    <Routes>
    <Route path='/' element={<Navigate to='/login' />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
    <Route path="/downloaded-reports" element={<DownloadedReportsPage />} />
    </Routes>
)
}

export default RoutesApp
