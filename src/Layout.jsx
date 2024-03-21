import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
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
