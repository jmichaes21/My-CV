import Footer from "./assets/components/Footer/index.jsx";
import Head from "./assets/components/Head/index.jsx";
import Header from "./assets/components/Header/index.jsx";
import Main from "./assets/components/Main/index.jsx";
import "./assets/css/style.css";
import "./assets/img/profile.jpg"
import "./assets/js/index.js"

function App() {

  return (
    <div>
      <Head />
      <div className="body">
      <Header />
      <Main />
      <Footer />
      </div>
    </div>
  );
}

export default App;
