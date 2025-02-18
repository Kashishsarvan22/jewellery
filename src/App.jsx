import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Main container for sidebar and content */}
      <div className="flex pt-4"> {/* Flex container */}
        {/* Sidebar */}
        <Sidebar />

        {/* Content */}
        <div className="flex-1 ml-64 p-4"> {/* Content takes the remaining space */}
          <Content />
        </div>
      </div>

      <h1 className="mt-20 text-center"> {/* Optional section for other content */}
        {/* Additional content */}
      </h1>

      
    </div>
  );
}

export default App;
