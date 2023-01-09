import Header from "../components/layout/Header";
import AboutMe from "../components/layout/AboutMe";
import Resume from "../components/layout/Resume";
import Project from "../components/layout/Project";
import LogoSlider from "../components/layout/LogoSlider";
import Blog from "../components/layout/Blog";
import Feedback from "../components/layout/Feedback";
import Footer from "../components/layout/Footer";


function HomePage() {
   return (
   <>  
      <Header /> 
      <AboutMe />
      <Resume />
      <Project />
      <LogoSlider />
      <Blog />
      <Feedback />
      <Footer />
   </> 
   );
 }
 
 export default HomePage;