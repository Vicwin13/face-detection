import Tilt from 'react-parallax-tilt';
import logo from "../assets/lens.png"
export default function Logo() {
  return (
    <>
    <Tilt
    glareEnable={true}
    glareColor='#000'
    glareMaxOpacity={0.8}
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    tiltReverse={true}
    
    >
        <div className='w-[4rem] shadow-xl text- hover:shadow-2xl flex items-center justify-center h-[4rem]' max={9}>       
        <img className='w-[3rem] h-[3rem]  flex items-center ' src={logo} alt="" />
        </div>
    </Tilt>
    
    </>
  );
}
