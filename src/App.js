import './App.css';
import Start from './components/start/Start';
import NewExpense from './components/newExpense/NewExpense';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <Start />
      <NewExpense />
      <Main />
      <Footer />
    </>
  );
}

export default App;