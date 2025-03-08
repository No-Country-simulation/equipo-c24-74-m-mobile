import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage.jsx'
import ForgotPasswordPage from '../pages/ForgotPasswordPage.jsx'
import DashboardPage from '../pages/DashboardPage.jsx'
import DownloadedReportsPage from '../pages/DownloadedReportsPage.jsx';
import TeacherDashboardPage from '../pages/TeacherDashboardPage.jsx'
import CreateEvaluationPage from '../pages/CreateEvaluationPage.jsx'
import EvaluationListPage from '../pages/EvaluationListPage.jsx'


const RoutesApp = () => {
return (
    <Routes>
    <Route path='/' element={<Navigate to='/login' />}></Route>
    <Route path='/login' element={<LoginPage />}></Route>
    <Route path='/signup' element={<SignupPage />} />
    <Route path='/forgot-password' element={<ForgotPasswordPage />} />
    <Route path='/dashboard' element={<DashboardPage />} />
    <Route path="/downloaded-reports" element={<DownloadedReportsPage />} />
    <Route path="/teacher-dashboard" element={<TeacherDashboardPage />} />
    <Route path="/create-evaluation" element={<CreateEvaluationPage />} />
    <Route path="/evaluation-list" element={<EvaluationListPage />} />
    </Routes>
)
}

export default RoutesApp
