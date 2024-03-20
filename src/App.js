import { Outlet } from "react-router-dom";
import "./App.css";
import { Home, Header, Container, Sidebar } from "./exports/exports";

function App({ children }) {
  return (
    <Container className="app">
      <Header />
      <div className="appPages">
        <div className="appSidebarContainer">
          <Sidebar />
        </div>
        <div className="appContainer">
          <Outlet />
        </div>
      </div>
    </Container>
  );
}

export default App;
