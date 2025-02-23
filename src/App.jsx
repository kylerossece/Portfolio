
import Nav from "./components/Nav"
import Header from "./components/Header"
import Projects from "./components/Projects"

function App() {

  return (
    <div className="h-screen mx-auto max-w-2xl w-full py-8 sm:py-24 tracking-wide text-neutral-700">
       <Nav />
       <Header />
       <Projects />
    </div>
  )
}

export default App
