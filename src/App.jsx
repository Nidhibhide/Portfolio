import {
  About,
  Contact,
  Education,
  Header,
  Home,
  Skills,
} from "./components";

function App() {
  return (
    <>
      <div className="bg-[#000000] text-[#FFFFFF] w-screen h-screen overflow-x-hidden">
        <Header />
        <Home />
        <hr className="border-t border-[#2E2E2E] my-16" />
        <About />
        <hr className="border-t border-[#2E2E2E] my-16" />
        <Education />
        <hr className="border-t border-[#2E2E2E] my-16" />
        <Contact />
      </div>
    </>
  );
}

export default App;
