/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Highlight from './components/Highlight.jsx'
import Model from './components/model.jsx'
import { div } from "three/webgpu";
import Features from "./components/Features.jsx";
import Chip from "./components/chip.jsx";
import Footer from "./components/footer.jsx";


const App = () => {
  console.log('app is working');
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  )
}

export default App
