const Banner = () => {
    return (
        <div className="my-10">
            <div className="hero rounded-lg h-[500px]" style={{ backgroundImage: 'url(https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/4fVIlFzacdODZ8pkik7UKS/79912a90ca46c2f3465b448dfa42d458/GettyImages-1358280577.jpg?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive&auto=format%2Ccompress&dpr=1&w=1000&h=)' }}>
                <div className="hero-overlay rounded-lg bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Motivating tech brand product suppliers is not just about business; it's about fostering the future. It's about harnessing their potential to create the next breakthrough technology, to make our lives easier, and to drive progress.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;