import { memo } from "react";
import HeaderInner from "../HeaderInner";
import Footer from "../Footer";

const SecondaryLayout = (props) => {
   return (
      <>
         <HeaderInner />
         {props.children}
         <Footer />
      </>
   );
}

export default memo(SecondaryLayout);
