import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;