import './App.css'
import Header from "./components/layout/Header.tsx";
import {Outlet} from "react-router-dom";
import Router from "./components/router/Router.tsx";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
        <Outlet/>
        <Header />
        <Router/>
    </>
  )
}

export default App
