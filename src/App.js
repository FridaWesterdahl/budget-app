import './App.css';
import Header from './components/header/Header'
import Aside from './components/aside/Aside';
import Main from './components/main/main';

function App() {
  return (
    <>
      <Header />
      <section id="app">
        <Aside />
        <Main />
      </section>

    </>
  );
}

export default App;