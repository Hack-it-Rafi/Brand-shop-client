import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
    light: 'public/light.css',
    dark: 'public/dark.css',
};

const Root = () => {
    return (
        <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
            <div>
                <div className="max-w-7xl mx-auto px-5">
                    <Header></Header>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </ThemeSwitcherProvider >
    );
};

export default Root;