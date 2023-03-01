import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Presentation from "@/components/Presentation/Presentation";
import { FunctionComponent} from "react"

const Home:FunctionComponent=()=> {

   return (
   <>
   <Presentation/>
   <About/>
   <Contact/>
   </>);
}

export default Home;