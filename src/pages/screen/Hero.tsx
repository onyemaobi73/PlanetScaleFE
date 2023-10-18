import pix from "../../assets/photo shoot.jpg"

const Hero = () => {
  return (
    <div className="w-[100%] py-[80px] medium:py-0 bg-slate-300 flex items-center justify-center ">
        <div className="w-[90%] flex items-center justify-between small:flex-col">
        <div className="w-[40%] relative rounded-[20px] justify-center items-center flex h-[530px] object-cover small:w-[93%]"> <img src={pix} alt="" className="object-cover rounded-[20px] small:rounded-[20px] small:h-[500px] small:w-[93%]"/>
        <div className=" absolute w-[180px] h-[180px] medium:h-[150px] small:hidden medium:w-[150px] rounded mt-[-140px] mb-[150px]medium:mb-[110px] medium:mr-[80%] mr-[85%] object-cover medium:object-cover"><img src={pix} alt="" className=" small:hidden rounded-[15px] object-cover h-[180px] w-[180px]  medium:w-[120px] medium:h-[120px]"/></div>
        <div className=" w-[110px] mb-[50px] ml-[100%] rounded-[15px] h-[100px] absolute">
            <img src={pix} alt="" className=" small:hidden w-[110px] h-[100px] rounded-[15px] medium:w-[90px] "/>
        </div>
        </div>
        <div className=" w-[50%]  h-[300px]  flex justify-center items-center text-[18px] medium:text-[16px] small:w-[90%]">"Database are Hard. we would rather PlanetScale manage them. our team want to focus on helping our customers meet their health and fitness goals, not the database servers"
        <br />
        <br />
        chris karper
        <br />
        Engineering Director, MyFitnessPal

        </div>
        </div>
    </div>
  )
}

export default Hero