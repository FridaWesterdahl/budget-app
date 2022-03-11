import './App.css';
import Start from './components/start/Start';
import NewExpense from './components/newExpense/NewExpense';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

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