import SearchBar from '../components/Dashboard/SearchBar/SearchBar';
import DashboardGrid from '../components/Dashboard/DashboardGrid/DashboardGrid';
import Navbar from '../components/NavbarLeft/NavbarLeft';

const DashboardPage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex">
           
            <div className="w-1/6 bg-white">
                <Navbar />
            </div>

          
            <div className="flex-1 p-4">
                <SearchBar />
                <DashboardGrid />
            </div>
        </div>
    );
};

export default DashboardPage;
