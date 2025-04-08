/* eslint-disable no-unused-vars */
import React, {useState, useEffect, useDebugValue} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TodoList from "./component/useState/TodoList";
import UserForm from "./Login/UserForm";
import Time from "./component/Time";
import Weather from "./component/Weather";
import TextInput from "./component/useState/TextInput";
import ThemeToggle from "./component/useState/ThemeToggle";
import FetchData from "./component/useEffect/FetchData";
import PageTitle from "./component/useEffect/PageTitle";
import Counter from "./component/useReducer/Counter";
import Form from "./component/useReducer/Form";
import ThemeProvider from "./component/useContext/ThemeProvider";
import ThemeButton from "./component/useContext/ThemeButton";
import ExpensiveCalculationParent from "./component/useMemo/ExpensiveCalculationParent";
import ListFilterParent from "./component/useMemo/ListFilterParent";
import Parent from "./component/useCallback/Parent";
import FocusInput from "./component/useRef/FocusInput";
import PreviousValue from "./component/useRef/PreviousValue";
import Parent1 from "./component/uselmperativeHandle/Parent1";
import Parent2 from "./component/uselmperativeHandle/Parent2";
import AnimateBox from "./component/useLayoutEffect/AnimateBox";
import ComponentSize from "./component/useLayoutEffect/ComponentSize";
import Data from "./component/Data";
import Search from "./component/Search";
import CounterUseState from "./component/useState/CounterUseState";
import Profile from "./component/useState/Profile";
import UserProfile from "./component/useContext/UserProfile";
import UserProvider from "./component/useContext/UserProvider";
import UpdateUser from "./component/useContext/UpdateUser";
import CounterZustamd from "./component/CounterZustand";
import ProductList from './component/shop/ProductList';  
import Cart from './component/shop/Cart';  
import "./App.css";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

// function useApi(url) {  
//   const [data, setData] = useState(null); // 创建一个名为 data 的状态变量，初始值为 null  

//   useDebugValue(data ? "Data Loaded" : "Loading"); // 使用 useDebugValue 进行调试信息显示  

//   useEffect(() => {  
//     fetch(url) // 发起 API 请求  
//       .then((res) => res.json()) // 解析响应为 JSON  
//       .then((json) => setData(json)); // 更新 data 状态  
//   }, [url]); // 依赖项为 url  

//   return data; // 返回获取到的数据  
// }

const App = () => {
  // const [isActive,setIsActive] = useState(false);
  // useCustomHook(isActive);
  
  // const data = useApi("https://api.xygeng.cn/openapi/one"); // 使用自定义 Hook 获取数据  
  // if (!data) return <p>加载中...</p>; // 如果数据未加载，显示加载提示

  const handleSearch = (query) => { 
    console.log("Searching for:",query); 
  };

  return (  
    <Router>  
      <div className="container mx-auto p-4">  
        <ProductList /> {/* 产品列表会在页面上显示 */}  
        <Cart /> {/* 购物车将直接显示在页面底部 */}  
      </div>  
    </Router>  
  );
};

export default App;