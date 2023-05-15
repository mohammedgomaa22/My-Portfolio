import MainTitle from "./Main-title";
import img from "../pic/tail-removebg-preview.png";
import "./skills.css";
// ------------------------

const Skills = () => {
    return (
        <>
            <div className="skills pt-10 pb-20">
                <MainTitle msg="What Skills I Have" title="My Skills"/>
                <div className="container mx-auto px-5">
                    {/* Boxes */}
                    <div className="row grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {/* Box-1 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-html5 text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">HTML5</p>
                        </div>
                        {/* Box-2 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-css3 text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">CSS3</p>
                        </div>
                        {/* Box-3 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            {/* <i className="fab fa-tumblr-square text-4xl main-color"></i> */}
                            <img className="h-8" src={img}/>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">Tailwind</p>
                        </div>
                        {/* Box-4 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-js-square text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">JavaScript</p>
                        </div>
                        {/* Box-5 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-react text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">React</p>
                        </div>
                        {/* Box-6 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-git-alt text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">Git</p>
                        </div>
                        {/* Box-7 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <i className="fab fa-github text-4xl main-color"></i>
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">Github</p>
                        </div>
                        {/* Box-8 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">ES6</p>
                        </div>
                        {/* Box-9 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">Json</p>
                        </div>
                        {/* Box-10 */}
                        <div className="col flex flex-col justify-center items-center bg-slate-950 rounded-2xl p-11">
                            <p className="text-3xl text-white mt-4 mb-3 font-semibold">Ajax</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;