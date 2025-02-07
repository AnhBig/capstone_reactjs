import { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { NavLink } from "react-router-dom";
import { BOOKINGAPI } from "../../API/booking/bookingApi";
const { Header, Sider } = Layout;

export const BookingManager = () => {
  const [bookingManager, setBookingManager] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  //cal API
  useEffect(() => {
    const getBooking = async () => {
      try {
        setLoading(true);
        const data = await BOOKINGAPI.getBookingApi();

        // cập nhập lại dữ liệu khi nhận được
        setBookingManager(data.content);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // gọi lại API
    getBooking();
  }, []);

  useEffect(() => {
    console.log(bookingManager, "check");
  }, [bookingManager]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-8"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: <NavLink to="/layout-Manager">Quản lý Người dùng</NavLink>,
            },
            {
              key: "2",
              icon: <LocationOnIcon />,
              label: <NavLink to="/location-Manager">Quản lý vị trí</NavLink>,
            },
            {
              key: "3",
              icon: <RoomPreferencesIcon />,
              label: <NavLink to="/room-Manager">Quản lý Phòng</NavLink>,
            },
            {
              key: "4",
              icon: <AssignmentTurnedInIcon />,
              label: <NavLink to="/book-Manager">Quản lý Booking</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>

          <div style={{ height: "100vh", overflow: "hidden" }}>
          <div 
            className="p-5 bg-gray-100"
            style={{ height: "100%", overflowY: "auto" }}>
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Quản Lý Lịch booking
            </h1>
            <div className="flex flex-wrap justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="border px-4 py-2 rounded w-full md:w-full mb-4 md:mb-0"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white rounded shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Mã phòng</th>
                    <th className="px-4 py-2">Ngày đến</th>
                    <th className="px-4 py-2">Ngày đi</th>
                    <th className="px-4 py-2">Số lượng khách</th>
                    <th className="px-4 py-2">Mã người dùng</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dòng 1 */}
                  {bookingManager.map((booking, index) => (
                    <tr key={index} className="text-center border-t">
                      <td className="px-4 py-2">{booking.id}</td>
                      <td className="px-4 py-2 flex items-center justify-center">
                        {booking.maPhong}
                      </td>
                      <td className="px-4 py-2">{booking.ngayDen}</td>
                      <td className="px-4 py-2">{booking.ngayDi}</td>
                      <td className="px-4 py-2">
                        {booking.soLuongKhach}
                      </td>
                      <td className="px-4 py-2">
                        {booking.maNguoiDung}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
      </Layout>
    </Layout>
  );
};
