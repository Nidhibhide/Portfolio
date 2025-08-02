import {
  About,
  Contact,
  Education,
  Experience,
  Header,
  Home,
  Projects,
} from "./components";

function App() {
  return (
    <>
      <div className="bg-[#000000] text-[#FFFFFF] w-screen h-screen overflow-x-hidden">
        <Header />
        <Home />
        <hr className="border-t border-[#2E2E2E]" />
        <About />
        <hr className="border-t border-[#2E2E2E]" />
        <Education />
        <hr className="border-t border-[#2E2E2E]" />
        <Projects />
        <hr className="border-t border-[#2E2E2E]" />
        <Experience />
        <hr className="border-t border-[#2E2E2E]" />
        <Contact />
      </div>
    </>
  );
}

export default App;
