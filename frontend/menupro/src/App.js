import MenuList from "./components/MenuList";

function App() {
  return (
    <>
      <div className="m-0 p-0 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#4CAF50] w-full h-[50px] flex items-center">
          <h1 className="text-[20px] font-bold text-white m-[15px] bg-transparent">
            MenuPro
          </h1>
        </div>

        {/* MenuList */}
        <div className="flex-grow">
          <MenuList type="category"/>
        </div>

        {/* Footer */}
        <footer className="bg-[#4CAF50] w-full h-[50px] flex items-center justify-center">
          <p className="text-white">© 2024 MenuPro</p>
        </footer>
      </div>
    </>
  );
}

export default App;

