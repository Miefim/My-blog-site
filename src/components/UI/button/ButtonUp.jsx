import { Link } from 'react-scroll'

function ButtonUp({ flag }) {

   return (
      <Link to = "header" className="button-up-block" spy={true} smooth={true} duration={500} style={flag && window.innerWidth >= 670? {display: "flex"} : {}}>
         <img className="button-up" src="images/left-arrow-white.png" alt="" />
      </Link>
   )}
   
   export default ButtonUp