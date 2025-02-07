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
import { LOCATIONAPI } from "../../API/location/LocationAPI";
const { Header, Sider } = Layout;

export const LocationManager = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const getLocations = async () => {
      try {
        setLoading(true); // Bắt đầu load
        const data = await LOCATIONAPI.getLocationApi();
        console.log(data, "123");

        setLocations(data.content); // Cập nhật dữ liệu khi nhận được
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false); // Dừng load
      }
    };

    getLocations();
  }, []); // Gọi API khi component mount

  useEffect(() => {
    console.log(locations, "1234");
  }, [locations]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        collapsedWidth={0}
        style={{ minHeight: "100vh" }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-8"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["2"]}
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
            className="md:hidden"
          />
        </Header>

        <div style={{ height: "100vh", overflow: "hidden" }}>
          <div
            className="p-5 bg-gray-100"
            style={{ height: "100%", overflowY: "auto" }}
          >
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Quản Lý Vị Trí
            </h1>
            <div className="flex flex-wrap justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="border px-4 py-2 rounded w-full md:w-1/2 mb-4 md:mb-0"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">
                + Thêm vị trí
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white rounded shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Mã ID</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Tỉnh thành</th>
                    <th className="px-4 py-2">Tên vị trí</th>
                    <th className="px-4 py-2">Quốc gia</th>
                    <th className="px-4 py-2">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {locations.map((location, index) => (
                    <tr key={index} className="text-center border-t">
                      <td className="px-4 py-2">{location.id}</td>
                      <td className="px-4 py-2 flex items-center justify-center">
                        <img
                          src={
                            location.hinhAnh || "https://via.placeholder.com/50"
                          }
                          alt="avatar"
                          className="w-8 h-8 rounded-full mr-2"
                        />
                      </td>
                      <td className="px-4 py-2">{location.tinhThanh}</td>
                      <td className="px-4 py-2">{location.tenViTri}</td>
                      <td className="px-4 py-2 font-bold">
                        {location.quocGia}
                      </td>
                      <td className="px-4 py-2 flex justify-center gap-5">
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
