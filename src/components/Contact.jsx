const Contact = () => {
    return <div className="w-full flex flex-col mt-4 px-4 md:w-[50%] md:m-auto">
        <div className="text-center pt-4 text-[24px] tracking-widest"><h2>CONTACT</h2></div>
        <div className="text-center"><p><i>Drop a Note</i></p></div>
        <div className="flex flex-col gap-4">
            <div>
                <label className="p" htmlFor="">Name:</label> <br />
                <input className="w-full p-1 border-2" type="text" placeholder="Enter your name here :-" />
            </div>
            <div>
                <label htmlFor="">Subject:</label> <br />
                <input className="w-full p-1 border-2" type="text" placeholder="Enter your message subject here :-" />
            </div>
            <div>
                <label htmlFor="">Message:</label> <br />
                <input className="w-full p-1 border-2" type="text" placeholder="Enter your message here :-" />
            </div>

            <button className=" w-[90%] m-auto bg-blue-600 p-2 mt-5 mb-[45px] text-white tracking-wide hover:scale-[1.1] transition duration-300 ease-in-out">Send Message</button>

        </div>
    </div>
};

export default Contact;