import About from "@/components/About/About";
import Presentation from "@/components/Presentation/Presentation";
import { FunctionComponent} from "react"

const Home:FunctionComponent=()=> {

   return (
   <>
   <Presentation/>
   <About/>
   </>);
}

export default Home;