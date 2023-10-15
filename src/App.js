import React from "react"

import { Header, About, Visi, Target, Footer } from "./containers"
import { Parallax } from "@react-spring/parallax"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Parallax pages={"auto"}>
        <Header />
        <About />
        <Visi />
        <Target />
        <Footer />
      </Parallax>
    </div>
  )
}

export default App
