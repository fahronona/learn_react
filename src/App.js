import Sidebar from "./components/Sidebar";
import Contentright from "./components/Content/contentright";
import Contentleft from "./components/Content/contentleft";

function App() {
  return (
    <div className="l min-h-screen bg-white flex flex-row max-w-[1440px] mx-auto">
    <Sidebar/>
    <section className="flex-1">
     <Contentleft/>
    </section>
    <Contentright/>
   

    </div>
  );
}

export default App;
