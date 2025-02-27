import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage.jsx'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.jsx'

const RoutesApp = () => {
return (
    <Routes>
    <Route path='/' element={<Navigate to='/login' />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
    </Routes>
)
}

export default RoutesApp
