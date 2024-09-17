import Header from "./components/layout/Header.tsx";
import {Outlet} from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <>
        <Header />
        <Outlet/>
    </>
  )
}

export default App
