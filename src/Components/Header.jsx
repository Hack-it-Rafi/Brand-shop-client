import logo from "../../public/pngwing.com.png"
const Header = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center">
            <img className="w-36 md:w-40" src={logo} alt="" />
            <div>
                <h1 className="text-6xl font-Young text-purple-700">RECTO</h1>
                <p className="text-purple-700">Technology and Electronics Goods</p>
            </div>
            
        </div>
    );
};

export default Header;