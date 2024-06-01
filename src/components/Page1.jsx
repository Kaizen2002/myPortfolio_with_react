const Page1 = ()=> {
    return <>
    <div className=" bg-[#F0ECEC] h-lvh flex justify-center items-center">

    <div className="middle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-[40px]">
            <span className="bg-black text-white px-2 py-1 opacity-75 tracking-wider">Hi, I am </span>
            <span className="text-black font-normal opacity-75 text-shadow px-2 py-1 tracking tracking-wider">Jyotirmay Padhairy</span>
        </h1>

        <div className="">
        <button className="inline-block relative top-32 px-8 py-4 text-sm font-semibold text-white bg-blue-600 border-none rounded-md cursor-pointer uppercase transition duration-300 ease-in-out overflow-hidden hover:scale-150"><a href=" src\assets\Jyotirmay Padhiary.pdf">Click For Resume </a></button>
        </div>  
    </div>

    </div>
    </>;
}

export default Page1;