import {
  BrowserRouter as Router,
  Routes,
  Route,
  // useNavigate,
} from "react-router-dom";
import { PATH } from "./constants/PATH";
// import { useEffect } from "react";
import { LayoutManager } from "./pages/admin/LayoutManage";
// import { NotFound } from "./layouts/NotFound";
import { LocationManager } from "./pages/admin/LocationManager";
import { RoomManager } from "./pages/admin/RoomManager";
import { BookingManager } from "./pages/admin/BookingManager";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/layoutManager");
  // }, [navigate]);

  return (
    <Routes>
      <Route path={PATH.layoutManager} element={<LayoutManager />} />
      <Route path={PATH.locationManager} element={<LocationManager/>} />
      <Route path={PATH.roomManager} element={<RoomManager/>} />
      <Route path={PATH.bookManager} element={<BookingManager/>} />

       {/* khi user váo bất kì path, ko phải đg dẫn đã có */}
       {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
