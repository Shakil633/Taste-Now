import Banner from "./Components/Banner/Banner";
import Environment from "./Components/Environment/Environment";
import Footer from "./Components/Footer/Footer";
import GetTo from "./Components/GetTo/GetTo";
import NavBar from "./Components/NavBar/NavBar";
import Popular from "./Components/Popular/Popular";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <div className="bg-gradient-to-b from-[#faeef0] to-[#fcfcfc] py-20 poppins-regular lg:px-16 xl:px-28 2xl:px-80 md:px-10 px-5">
        <Popular></Popular>
        <GetTo></GetTo>
        <Environment></Environment>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
