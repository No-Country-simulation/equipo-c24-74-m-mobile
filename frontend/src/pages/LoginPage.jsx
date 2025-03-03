import Login from '../components/Login/FormLogin'
import logoAcademia from '../assets/images/ProyectNC-login.png'

const LoginPage = () => {
return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-indigo-50'>
    <div className='w-full max-w-[1200px] p-4 md:p-8'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
        <img
            src={logoAcademia}
            alt='Logo Academia'
            className='mb-4 md:mb-0 md:mr-8 bg-indigo-50  p-2 rounded w-[500px] md:w-[700px]'
        />
        <div className='w-full md:w-1/2 flex items-start md:items-center justify-center mt-4 md:mt-40'>
            <Login />
        </div>
        </div>
    </div>
    </div>
)
}

export default LoginPage
