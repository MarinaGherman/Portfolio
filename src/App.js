import s from './App.module.css';
import Header from "./common/header/Header";
import Main from "./main/Main";

import Remote from "./remote/Remote";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./common/footer/Footer";


function App() {
  return (
      <div className={s.app}>
          <div className={s.container}>
              <Header />
              <Main />
              <Projects/>
              <Remote/>
              <Contacts/>
              <Footer/>
          </div>
      </div>

  );
}

export default App;
