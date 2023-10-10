import icon from "../../assets/icon.svg"
// import arrow from "../../assets/arrow.svg"


const SubHeader = () => {
    return (
        <div className="w-full h-[270px] flex justify-center items-center  rounded-lg">
            
            <div className="w-[95%] h-[250px] flex justify-between items-center relative">

                <div className="w-[700px] h-[230px] bg-gradient-to-r from-gray-850 to-gray-900 flex justify-center  px-1 py-1 shadow-2xl shadow-black/45 ">

                    <div className="flex flex-col justify-center px-4 py-1 ">
                        <div className="w-[60px] flex justify-center items-center border-[green] text-green-400 border-[1px] rounded-full">new</div>
                        <div className="text-[20px] font-bold my-2">PlanetScale Serverless Driver for Javascript</div>
                        <div>A Fetch API-compatible database driver for serverless and edge compute platforms  </div>
                            <div className="w-[170px] font-bold text-[#fffefe] flex hover:text-[orangered] mt-1">Check out the repo </div>
                    </div>
                    <div className="">
                        <img src={icon} alt="" className="bg-[silver]"/>
                    </div>
                </div>


                <div className="w-[700px] h-[250px] flex justify-center bg-[pink] px-1 py-1 ">

                    <div className="flex flex-col justify-center px-4 py-1 ">
                        <div className="w-[60px] flex justify-center items-center border-[green] text-green-400 border-[1px] rounded-full">new</div>
                        <div className="text-[20px] font-medium">PlanetSclae Serverless Driver for Javascript</div>
                        <div>A Fetch API-compatible database driver for serverless and edge compute platforms  </div>
                        <div>Check out the repo {">"}</div>
                    </div>
                    <div className="">
                        <img src={icon} alt="" className="bg-[silver]"/>
                    </div>
                </div>


                <div></div>
            </div>
        </div>
    )
}

export default SubHeader