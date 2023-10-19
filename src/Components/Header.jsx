import logo from "../../public/pngwing.com.png"
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <img className="w-36 md:w-40" src={logo} alt="" />
            <h1 className="text-6xl font-Young text-purple-700">RECTO</h1>
        </div>
    );
};

export default Header;