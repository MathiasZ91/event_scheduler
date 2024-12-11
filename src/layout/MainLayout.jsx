import { Outlet } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../components/Error";
import ChatBot from '../components/ChatBot'; // Make sure the path is correct

function MainLayout() {
  return (
    <div>
      <NavBar />
      
      <main>
        <Outlet />
      </main>
      
      <Footer />
      
      
      <ChatBot />  
    </div>
  );
}

export default MainLayout;
