import { useState } from 'react'
import ResetPassword from '../components/forgotPassword/ResetPassword'
import Modal from '../components/forgotPassword/Modal'

const ForgotPasswordPage = () => {
const [isModalVisible, setModalVisible] = useState(false)

const handleResetPasswordSubmit = () => {
    setModalVisible(true)
}

return (
    <div>
    {!isModalVisible ? (<ResetPassword onSubmit={handleResetPasswordSubmit}/>) : (
        <Modal />
    )}
    </div>
)
}

export default ForgotPasswordPage;
