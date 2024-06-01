import React from 'react';

const About = () => {
    return (
        <div className="about-container p-5 flex flex-col gap-2 md:w-1/2 md:mx-auto">
            <div className="text-center  tracking-widest text-3xl font-normal mt-10 py-2">ABOUT</div>
            <div className="text-center text-red-600 py-2"><i>I am a Web Developer</i></div>
            <div className="py-5 text-[14px] md:text-[16px]">Greetings! I'm Jyotirmay Padhiary, a Computer Science & Engineering alumnus from Gandhi Institute for Technology, Bhubaneswar. My foundation in programming, web development, and graphic design is built through rigorous academics, hands-on projects, and enriching internships. Skilled in Java, HTML5, CSS3, JavaScript, and SQL, I excel in creating responsive and visually captivating web applications. My portfolio includes a personalized portfolio webpage, a PG booking platform, and an event management system. <br /> <br />

            My professional journey includes roles at Soulbliz in graphic design and Glucian IndiaPvt. Ltd. in web development, enhancing my design acumen and coding prowess. I thrive in collaborative settings, leveraging interpersonal skills, leadership, and time management to drive success. Outside of work, I enjoy social media dynamics, gaming, and music. Fluent in English and Hindi, I cherish my cultural heritage.
            </div>

            <div className='skillset px-5 py-10'>

                <div className="text-center tracking-widest text-3xl font-normal mt-5 mb-4 py-2">Skills</div>

                <div className="skills-section">
                    <div className="skill mb-5">
                        <h3 className='font-normal tracking-wide text-base mb-4 text-center md:text-[20px]'>Front-End Web Development</h3>
                        <div className="progress-bar bg-gray-200 h-8 rounded-full overflow-hidden">
                            <div className="progress bg-green-500 h-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <h3 className='font-normal tracking-wide text-base mb-4 text-center md:text-[20px]'>Core Java</h3>
                        <div className="progress-bar bg-gray-200 h-8 rounded-full overflow-hidden">
                            <div className="progress bg-orange-500 h-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                    <div className="skill">
                        <h3 className='font-normal tracking-wide text-base mb-4 text-center md:text-[20px]'>MySQL</h3>
                        <div className="progress-bar bg-gray-200 h-8 rounded-full overflow-hidden">
                            <div className="progress bg-green-500 h-full" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
