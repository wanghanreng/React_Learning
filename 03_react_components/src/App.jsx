/* eslint-disable no-unused-vars */
import Welcomeclass from "./components/WelcomeClass";
import WelcomFunc from "./components/WelcomeFunc";
import Student from "./components/Student";
import RegistPage from "./components/Regist/RegistPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BookList from "./components/Books/BookList";

const App = () => {

  const studentData = {  
    name: "000",  
    studentId: "010203",  
    age: 18,  
    avatar: "https://wanghanreng.oss-cn-guangzhou.aliyuncs.com/35dc4987-baef-4caa-8047-94a35bd23d23_777.jpg", // 这里可以替换为实际的头像URL  
  };

  return (
    // <Student   
    //   name={studentData.name}   
    //   studentId={studentData.studentId}   
    //   age={studentData.age}   
    //   avatar={studentData.avatar}   
    // />
    <>
      <Header/>
      <BookList/>
      <Footer/>
    </>
  );
};

export default App;