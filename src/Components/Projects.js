import MainTitle from "./Main-title";
import Pro from "./Pro";
import Teq from './Teq';
import img1 from '../pic/pro/1- le.png';
import img2 from '../pic/pro/2- ple.PNG';
import img3 from '../pic/pro/3- maz.PNG';
import img4 from '../pic/pro/4- boo.PNG';
import img5 from '../pic/pro/5- elz.PNG';
import img6 from '../pic/pro/6- note.PNG';
import img7 from '../pic/pro/7- dashboard.PNG';
import img8 from '../pic/pro/8- tailwind.PNG';
import img9 from '../pic/pro/9- w-challenge.PNG';
import img10 from '../pic/pro/10- portfolio.PNG';
// ------------------------
// Teq
let t1 = <Teq name="HTML5"/>
let t2 = <Teq name="CSS3"/>
let t3 = <Teq name="Javascript"/>
let t4 = <Teq name="Tailwind"/>
let t5 = <Teq name="JSON"/>
let t6 = <Teq name="AJAX"/>
// ------------------------
// Links 
let pre1 = "https://mohammedgomaa22.github.io/My-First-Design/";
let get1 = "https://github.com/mohammedgomaa22/My-First-Design";
let pre2 = "https://mohammedgomaa22.github.io/My-Second-Page/";
let get2 = "https://github.com/mohammedgomaa22/My-Second-Page";
let pre3 = "https://mohammedgomaa22.github.io/Mazzika-templete-3/";
let get3 = "https://github.com/mohammedgomaa22/Mazzika-templete-3";
let pre4 = "https://mohammedgomaa22.github.io/HTML-And-CSS-Template-4-Books-/";
let get4 = "https://github.com/mohammedgomaa22/HTML-And-CSS-Template-4-Books-";
let pre5 = "https://mohammedgomaa22.github.io/HTML-And-CSS-Template-5-M.G-/#";
let get5 = "https://github.com/mohammedgomaa22/HTML-And-CSS-Template-5-M.G-";
let pre6 = "https://mohammedgomaa22.github.io/Notes/";
let get6 = "https://github.com/mohammedgomaa22/Notes";
let pre7 = "https://mohammedgomaa22.github.io/Dashboard/";
let get7 = "https://github.com/mohammedgomaa22/Dashboard";
let pre8 = "https://mohammedgomaa22.github.io/Tailwind/";
let get8 = "https://github.com/mohammedgomaa22/Tailwind";
let pre9 = "https://mohammedgomaa22.github.io/w-challenge/";
let get9 = "https://github.com/mohammedgomaa22/w-challenge";
let pre10 = "https://mohammedgomaa22.github.io/portfolio/";
let get10 = "https://github.com/mohammedgomaa22/portfolio";
const Projects = () => {
    return (
        <>
            <div id="projects" className="projects pb-24">
                <MainTitle msg="My Recent Work" title="Portfolio"/>
                <div className="container mx-auto px-5">
                    {/* Projects */}
                    <div className="row grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                        <Pro name="W-challenge" preLink={pre9} getLink={get9} img={img9} teq1={t1} teq2={t2} teq3={t3} teq5={t5} />
                        <Pro name="Tailwind" preLink={pre8} getLink={get8} img={img8} teq1={t1} teq2={t2} teq3={t3} teq4={t4} />
                        <Pro name="Dashboard" preLink={pre7} getLink={get7} img={img7} teq1={t1} teq2={t2} />
                        <Pro name="Portfolio" preLink={pre10} getLink={get10} img={img10} teq1={t1} teq2={t2} teq3={t3} />
                        <Pro name="Note" preLink={pre6} getLink={get6} img={img6} teq1={t1} teq2={t2} teq3={t3} />
                        <Pro name="M|G" preLink={pre5} getLink={get5} img={img5} teq1={t1} teq2={t2} teq3={t3} />
                        <Pro name="Books" preLink={pre4} getLink={get4} img={img4} teq1={t1} teq2={t2} />
                        <Pro name="Mazzika" preLink={pre3} getLink={get3} img={img3} teq1={t1} teq2={t2} />
                        <Pro name="Palestine" preLink={pre2} getLink={get2} img={img2} teq1={t1} teq2={t2} />
                        <Pro name="Leon" preLink={pre1} getLink={get1} img={img1} teq1={t1} teq2={t2} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;