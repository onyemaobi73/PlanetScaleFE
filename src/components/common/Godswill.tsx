import square from "../../assets/square.svg"
import etsy from "../../assets/etsy.svg"
import com from "../../assets/com.svg"
import fit from "../../assets/fit.svg"
import sol from "../../assets/sol.svg"
import att from "../../assets/att.svg"
import kick from "../../assets/kick.svg"

const Header = () => {

    return (
        
        <div className="w-full h-[250px] flex flex-col justify-center items-center">

            <div className="mb-[15px]">
                <p className="font-extrabold text-[20px]">PlanetScale is trusted by
                </p>
            </div>
        
            <div className="flex max-w-[60%] justify-center h-[100px] flex-wrap">

                <img src={square} alt="square" className="w-[180px] h-[60px] flex justify-center m-2 opacity-20"/>
                    
                <img src={etsy} alt="etsy" className="w-[200px] h-[60px] flex justify-center m-2 opacity-30"/>
                
                <img src={com} alt="com" className="w-[180px] h-[60px] flex justify-center m-2 opacity-30"/>
                  
            
                <img src={fit} alt="fit" className="w-[180px] h-[60px] flex justify-center items-center  m-2 opacity-30" />
                
                <img src={sol} alt="sol" className="w-[180px] h-[60px] flex justify-center items-center m-2 opacity-30" />
                
                <img src={att} alt="att" className="w-[180px] h-[60px] flex justify-center items-center  m-2 opacity-30" />
                
                <img src={kick} alt="kick" className="w-[180px] h-[60px] flex justify-center items-center m-2 opacity-30"/>
             
            </div>
        
      </div>
  )
}

export default Header