import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                // style={({ isActive }) => {
                //   return isActive ? { color: "red" } : {};
                // }}
                className={({ isActive }) => {
                  return isActive ? "new-active" : "";
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                // style={({ isActive }) => {
                //   return isActive ? { color: "red" } : {};
                // }}
                className={({ isActive }) => {
                  return isActive ? "new-active" : "";
                }}
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>&copy; 2024 FJSx23. All rights resereved</p>
      </footer>
    </>
  );
};

export default Layout;
