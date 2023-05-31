import './pro.css';
import { SiGithub } from 'react-icons/si'
import { FaRegEye } from 'react-icons/fa'
// -------------------
const Pro = (props) => {
    return (
        <>
            {/* Pro-1 */}
            <div className="project relative cursor-pointer rounded-xl mb-6 min-w-[300px] max-w-[400px] h-[220px] hover:-translate-y-5 overflow duration-300">
                {/* Pic */}
                <div className='overflow-hidden relative rounded-xl w-full h-full'>
                    <img src={props.img} className='w-full h-full duration-[1000ms]' />
                    {/* TEQ */}
                    <div className='teq w-full text-white z-20 absolute -bottom-[50%] p-4 second-bg opacity-90 flex flex-wrap items-center justify-center gap-3 duration-500'>
                        {props.teq1}
                        {props.teq2}
                        {props.teq3}
                        {props.teq4}
                        {props.teq5}
                        {props.teq6}
                    </div>
                </div>
                {/* Open */}
                <div className='open-pro -z-10 flex gap-2 justify-between items-center absolute w-full px-4 bottom-[50%] text-white pt-3 duration-500'>
                    <a href={ props.getLink } target="_blank">
                        <span className='flex gap-4 items-center justify-center px-3 py-1 rounded-md bg-slate-100 text-black font-medium text-md border border-slate-100 hover:text-white hover:bg-transparent duration-300'>
                            <SiGithub />
                            GitHub
                        </span>
                    </a>
                    <a href={ props.preLink } target="_blank">
                        <span className='flex gap-4 items-center justify-center px-3 py-1 rounded-md main-bg text-white font-medium text-md border border-sky-500 hover:text-white hover:bg-transparent duration-300'>
                            <FaRegEye />
                            Preview
                        </span>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Pro;