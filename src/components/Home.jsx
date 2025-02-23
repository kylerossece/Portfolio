import Nav from "./Nav"
import Header from "./Header"
import Projects from "./Projects"



function Home() {

  return (
    <div className="h-screen mx-auto max-w-2xl w-full py-8 sm:py-24 tracking-wider text-neutral-700 font-mono">
       <Nav/>
       <Header />
       <Projects />

    </div>
  )
}

export default Home