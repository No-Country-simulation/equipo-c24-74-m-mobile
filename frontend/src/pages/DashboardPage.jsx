import SearchBar from '../components/Dashboard/SearchBar/SearchBar';
import DashboardGrid from '../components/Dashboard/DashboardGrid/DashboardGrid';
import Navbar from '../components/NavbarLeft/NavbarLeft';
import FloatingButton from '../components/FloatingButton/FloatingButton';

const DashboardPage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex">
           
            <div className="w-1/6 bg-white">
                <Navbar userName= "Juan Perez"/>
            </div>

          
            <div className="flex-1 p-4">
                <SearchBar />
                <DashboardGrid />
                <FloatingButton
                    url="/teacher-dashboard"
                    position="bottom-4 right-4"
                    label="M"
                    tooltip="Maestros"
                />
            </div>
        </div>
    );
};

export default DashboardPage;
