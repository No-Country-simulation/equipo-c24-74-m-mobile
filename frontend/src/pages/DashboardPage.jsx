import SearchBar from '../components/Dashboard/SearchBar/SearchBar';
import DashboardGrid from '../components/Dashboard/DashboardGrid/DashboardGrid';

const DashboardPage = () => {
    return (
        <div className="bg-blue-100 min-h-screen p-4">
            <SearchBar />
            <DashboardGrid />
        </div>
    );
};

export default DashboardPage;
