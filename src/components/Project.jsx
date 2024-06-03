import React from 'react'

function Project() {
    return (
        <div className='w-full bg-black '>
            <div className="project-container p-5 flex flex-col gap-2">
                <div className="text-center text-white tracking-widest text-3xl font-normal mt-10 py-2">PROJECTS</div>
                <div className=' text-center text-white py-2'><i>Remember to look</i></div>
                <div className="projects-list flex flex-col">
                    <div className="project1 w-[90%] mt-[5px] m-auto h-[300px] bg-orange-400">
                        <div className="up w-full h-[250px] bg-cover bg-center  bg-url(myPortfolio_with_react\src\assets\portfolio_ss.png)"></div>
                        <div className="down w-full h-[50px] bg-purple-400 text-center flex justify-center items-center">EXPLORE</div>
                    </div>
                    <div className="project2 w-[90%] mt-[5px] m-auto h-[300px] bg-yellow-400">
                        <div className="up w-full h-[250px] bg-cover bg-center  bg-url(myPortfolio_with_react\src\assets\portfolio_ss.png)"></div>
                        <div className="down w-full h-[50px] bg-purple-400 text-center flex justify-center items-center">EXPLORE</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;
