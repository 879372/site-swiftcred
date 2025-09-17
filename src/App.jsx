import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"
import Section3 from "./components/section3/section3"
import Section4 from "./components/section4/section4"
import Section5 from "./components/section5/section5"

function App() {

  return (
        <div className="h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-slate-900 antialiased overflow-auto">
           <Header/>
            <main className="max-w-7xl mx-auto px-6">
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </main>
                <Footer/>
        </div>
  )
}

export default App
