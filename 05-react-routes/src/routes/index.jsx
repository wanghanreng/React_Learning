import { Routes, Route } from "react-router-dom";  
import Home from "../pages/Home";  
import About from "../pages/About";  
import NotFound from "../pages/error/NotFound";  
import Login from "../pages/Login";
import Book from "../pages/Book";
import Dashboard from "../pages/dashboard/Dashboard";  
import Profile from "../pages/dashboard/Profile";   
import Setting from "../pages/dashboard/Setting";   
import Fans from "../pages/dashboard/Fans";   
import Follow from "../pages/dashboard/Follow";

const AppRoutes = () => {  
  return (  
    <Routes>  
      <Route path="/login" element={<Login />} />  
      <Route path="/about" element={<About />} />  
      <Route path="*" element={<NotFound />} />  
      <Route path="/" element={<Home />} />
      <Route path="/book/:bookId" element={<Book />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Profile/>}/>
        <Route path="profile" element={<Profile />}>
          <Route path="fans" element={<Fans />} />  
          <Route path="follow" element={<Follow />} />
        </Route>  
        <Route path="setting" element={<Setting />} />  
      </Route>  
    </Routes>  
  );  
};  

export default AppRoutes;