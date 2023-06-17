import NavBar from '../components/Navbar/NavBar';

const MainLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
