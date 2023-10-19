import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;