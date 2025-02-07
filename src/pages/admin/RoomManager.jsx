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
import { ROOMAPI } from "../../API/room/RoomAPI";
const { Header, Sider } = Layout;

export const RoomManager = () => {
  const [roomManager, setRoomManager] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // call API
  useEffect(() => {
    const getRoom = async () => {
      try {
        setLoading(true);
        const data = await ROOMAPI.getRoomApi();
        console.log("room", data);

        //cập nhập lại dữ liệu khi nhận được
        setRoomManager(data.content);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    // gọi lại API
    getRoom();
  }, []);

  useEffect(() => {
    console.log(roomManager, "hallo");
  }, [roomManager]);

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
          defaultSelectedKeys={["3"]}
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
            style={{ height: "100%", overflowY: "auto" }}
          >
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Quản Lý Phòng
            </h1>
            <div className="flex flex-wrap justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="border px-4 py-2 rounded w-full md:w-1/2 mb-4 md:mb-0"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">
                + Thêm phòng
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white rounded shadow">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="px-4 py-2 w-1/12">Mã ID</th>
                    <th className="px-4 py-2 w-7/12">Tên phòng</th>
                    <th className="px-4 py-2 w-1/12">Vị trí</th>
                    <th className="px-4 py-2 w-1/12">Chi tiết</th>
                    <th className="px-4 py-2 w-3/12 text-center">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {roomManager.map((room, index) => (
                    <tr key={index} className="border-t text-left">
                      <td className="px-4 py-2">{room.id}</td>
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={room.hinhAnh || "https://via.placeholder.com/50"}
                          alt="avatar"
                          className="w-1/2 h-1/2 mr-4"
                        />
                        <span>{room.tenPhong}</span>
                      </td>
                      <td className="px-4 py-2">{room.maViTri}</td>
                      <td className="px-4 py-2">
                        <button>Chi tiết</button>
                      </td>
                      <td className="px-4 py-2 text-center">
                        <div className="flex justify-center space-x-4">
                          <button className="text-blue-500">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                            </svg>
                          </button>
                          <button className="text-red-500">
                            <svg
                              className="w-5 h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                            >
                              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" />
                            </svg>
                          </button>
                        </div>
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
