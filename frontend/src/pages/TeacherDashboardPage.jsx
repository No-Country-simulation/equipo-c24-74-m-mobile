import TeacherDashboard from '../components/teacherTasks/TeacherDashboard.jsx';
import FloatingButton from '../components/FloatingButton/FloatingButton.jsx';

const TeacherDashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <TeacherDashboard />
      <FloatingButton
                    url="/create-evaluation"
                    position="bottom-4 right-4"
                    label="EV"
                    tooltip="Crear evaluación"
                />
    </div>
  );
};

export default TeacherDashboardPage;
