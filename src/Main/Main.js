import '../App.css';
import Services from './Services/Services';
import Slider from './Slider/Slider';
import About from './About/About';
import Testimonial from './Testimonial/Testimonial';

function Main() {
  return (
    <div>
         <div>
            <Slider/>
         </div>
         <div>
           <About/>
         </div>
         <div>
           <Services/>
         </div>
         <div>
           <Testimonial/>
         </div>
    </div>
  );
}

export default Main;
