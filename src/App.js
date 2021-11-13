import s from './App.module.css';
import Header from "./common/header/Header";
import Main from "./main/Main";

function App() {
  return (
      <div className={s.app}>
          <div className={s.container}>
              <Header />
              <Main />
          </div>
      </div>

  );
}

export default App;
