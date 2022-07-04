import s from './App.module.scss';
import Header from "./common/header/Header";
import Main from "./main/Main";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./common/footer/Footer";


function App() {
  return (
      <div className={s.app}>
          <Header />
          <div className={s.container}>
              <Main />
              <Projects/>
              <Contacts/>
          </div>
          <Footer/>
      </div>

  );
}

export default App;
