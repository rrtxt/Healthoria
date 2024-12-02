import NavBar from "../components/general/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      {children}
      <NavBar />
    </div>
  );
};

export default MainLayout;
