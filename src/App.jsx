import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Highlight from './components/Highlight.jsx'
import Model from './components/model.jsx'
const App = () => {
  console.log('app is working');
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  )
}

export default App
