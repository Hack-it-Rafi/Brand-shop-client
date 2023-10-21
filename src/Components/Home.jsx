import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import { useThemeSwitcher } from 'react-css-theme-switcher';
import React from "react";
import WhyChoseUs from "./WhyChoseUs";


const Home = () => {
    const brands = useLoaderData();
    const { switcher, themes, currentTheme, status } = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    // if (status === 'loading') {
    //     return <div>Loading styles...</div>;
    // }

    const toggleDarkMode = () => {
        setIsDarkMode(previous => {
            switcher({ theme: previous ? themes.light : themes.dark });
            return !previous;
        });
    };
    return (

        <div>
            <div className="flex justify-end">
                <div className="flex gap-2">
                    <p>Theme</p>
                <button className="" onClick={toggleDarkMode}><input type="checkbox" className="toggle" /></button>
                </div>
            </div>
            <Banner></Banner>
            <div className='text-center my-10'>
                <h1 className='text-5xl font-Young'>Brands</h1>
            </div>
            <Brands brands={brands}></Brands>
            <div className="my-20">
                <WhyChoseUs></WhyChoseUs>
            </div>
        </div>

    );
};

export default Home;