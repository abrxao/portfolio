import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Presentation from "@/components/Presentation/Presentation";
import Projects from "@/components/Projects/Projects";
import { FunctionComponent} from "react"

const Home:FunctionComponent=()=> {

   return (
     <>
       <Presentation />
       <About />
       <Projects />
       <Contact />
     </>
   );
}

export default Home;