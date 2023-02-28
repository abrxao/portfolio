import About from "@/components/About/About";
import Presentation from "@/components/Presentation/Presentation";
import Send from "@/components/Send/Send";
import { FunctionComponent} from "react"

const Home:FunctionComponent=()=> {

   return (
   <>
   <Presentation/>
   <About/>
   <Send/>
   </>);
}

export default Home;