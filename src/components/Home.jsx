// import Nav from "./Nav"
// import Header from "./Header"
import Projects from "./Projects"
import Description from "./Description"
import Skill from "./Skill"


function Home() {

  return (
    <div className="mx-auto max-w-2xl w-full py-8 sm:py-24 tracking-wider text-neutral-700 font-mono">
       {/* <Nav/> */}
       <Description />
     
       <Projects />
       <Skill />

    </div>
  )
}

export default Home