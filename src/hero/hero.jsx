import './hero.css';
import Header from '../Header/Header';
import img1 from '../imga/story set illustration.png';
import img2 from '../imga/Rectangle 8.png';



const Hero = () => {

    return ( 
        <div className="hero">
        <Header/>
      
        <div className="hero-body">
            <div className="left-hero">
                <h1>Better days ahead.</h1>
                <p>Comrade is helping 1 million Nigerians secure their finacial freedom per second.</p>
                <button>Get Started</button>
            </div>
            <div className="right-hero ">
                <img className='img-fluid' src={img2} alt="" /> 
                <img className='img-fluid' src={img1} alt="" />
            </div>
        </div>
        
        </div>
     );
}
 
export default Hero;