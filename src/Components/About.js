import MainTitle from "./Main-title";
import "./about.css";
// ------------------------

const About = () => {
    return (
        <>
            <div className="about py-20">
                <MainTitle msg="Get To Know" title="About Me"/>
                <div className="container mx-auto px-5">
                    <div className="content flex flex-col justify-center gap-20 xl:flex-row xl:justify-between">
                        {/* Img */}
                        <div className="h-80 w-80 sm:h-96 sm:w-96 bg-gradient-to-tr from-sky-700 to-transparent rounded-3xl mx-auto xl:m-0">
                            <div className="pic h-full w-full bg-cover bg-center rounded-3xl rotate-6 hover:rotate-0 duration-500"></div>
                        </div>
                        {/* Info */}
                        <div className="info flex flex-col gap-10 justify-center sm:justify-start">
                            {/* Boxes */}
                            <div className="row flex flex-col justify-center md:flex-row gap-5">
                                {/* Box-1 */}
                                <div className="col md:w-64 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                                    <i className="fas fa-medal text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Experience</p>
                                    <span className="text-gray-500 font-semibold">1+ Year Working</span>
                                </div>
                                {/* Box-2 */}
                                <div className="col md:w-64 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                                    <i className="fas fa-people-roof text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Clients</p>
                                    <span className="text-gray-500 font-semibold">3+ Worldwide</span>
                                </div>
                                {/* Box-3 */}
                                <div className="col md:w-64 flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                                    <i className="fas fa-folder-open text-4xl main-color"></i>
                                    <p className="text-3xl text-white mt-4 mb-3 font-semibold">Projects</p>
                                    <span className="text-gray-500 font-semibold">8+ Completed</span>
                                </div>
                            </div>
                            {/* Text */}
                            <p className="text-gray-500 font-semibold text-lg md:w-[720px] mx-auto xl:m-0 text-center xl:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora officia? Voluptate consequuntur corrupti qui ab impedit, repellendus minima reiciendis quos unde fuga. Quia harum dolorem odit id voluptatem dolor.</p>
                            {/* BTN */}
                            <button className="main-btn main-bg w-fit hover:bg-transparent mx-auto xl:m-0">Let's Talk</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;