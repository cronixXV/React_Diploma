import { Route, Routes } from 'react-router-dom';
import AdminPanelPage from '../../pages/adminPanel/AdmilPanelPage';

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminPanelPage />} />
  </Routes>
);

export default AdminRoutes;
