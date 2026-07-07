import { Outlet, Link } from "react-router";
import "./Layout.css";

function Layout() {
  return (
    <>
      <header className="navbar">
        <h2 className="logo">JOB PORTAL</h2>

        <nav>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;