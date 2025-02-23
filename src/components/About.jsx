import React from 'react'
import Nav from "./Nav"
import Description from "./Description"
import Skill from "./Skill"

function About() {

  return (
    <div className="h-screen mx-auto max-w-2xl w-full py-8 sm:py-24 tracking-wider text-neutral-700  font-mono">
        <Nav />
        <Description />
        <Skill />
    </div>
  )
}

export default About