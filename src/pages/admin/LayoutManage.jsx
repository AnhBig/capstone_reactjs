import { useState } from "react";
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
const { Header, Sider, Content } = Layout;

export const LayoutManager = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          className="mt-8"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
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
        <Content>
          <div className="p-5 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Quản Lý Người Dùng
            </h1>
            <div className="flex flex-wrap justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="border px-4 py-2 rounded w-full md:w-1/2 mb-4 md:mb-0"
              />
              <button className="bg-red-500 text-white px-4 py-2 rounded w-full md:w-auto">
                + Thêm người dùng
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full bg-white rounded shadow">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Mã ID</th>
                    <th className="px-4 py-2">Username</th>
                    <th className="px-4 py-2">Birthday</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2 flex items-center gap-2">
                      <span>Người dùng</span>
                      <span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                        </svg>
                      </span></th>
                    <th className="px-4 py-2">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dòng 1 */}
                  <tr className="text-center border-t">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      ERJHHY
                    </td>
                    <td className="px-4 py-2">29/11/1993</td>
                    <td className="px-4 py-2">admin@gmail.com</td>
                    <td className="px-4 py-2 text-red-500 font-bold">ADMIN</td>
                    <td className="px-4 py-2 flex justify-center">
                      <button className="mr-2 text-blue-500">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                  {/* Dòng 2 */}
                  <tr className="text-center border-t">
                    <td className="px-4 py-2">43454</td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      PU VU XA
                    </td>
                    <td className="px-4 py-2">14/01/2025</td>
                    <td className="px-4 py-2">puvuxa@mailinator.com</td>
                    <td className="px-4 py-2 text-red-500 font-bold">ADMIN</td>
                    <td className="px-4 py-2 flex justify-center">
                      <button className="mr-2 text-blue-500">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                  {/* Dòng 3 */}
                  <tr className="text-center border-t">
                    <td className="px-4 py-2">43461</td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      BOSS LUCI
                    </td>
                    <td className="px-4 py-2">15/01/2025</td>
                    <td className="px-4 py-2">adminluci@gmail.com</td>
                    <td className="px-4 py-2 text-red-500 font-bold">ADMIN</td>
                    <td className="px-4 py-2 flex justify-center">
                      <button className="mr-2 text-blue-500">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>

                  {/* Dòng 4 */}
                  <tr className="text-center border-t">
                    <td className="px-4 py-2">43526</td>
                    <td className="px-4 py-2 flex items-center justify-center">
                      <img
                        src="https://via.placeholder.com/50"
                        alt="avatar"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      ERJHHY
                    </td>
                    <td className="px-4 py-2">09/10/2024</td>
                    <td className="px-4 py-2">bbbbbbbbbbbbbbbbb@gmail.com</td>
                    <td className="px-4 py-2 text-green-500 font-bold">USER</td>
                    <td className="px-4 py-2 flex justify-center">
                      <button className="mr-2 text-blue-500">
                        <i className="fas fa-edit"></i>
                      </button>
                      <button className="text-red-500">
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
