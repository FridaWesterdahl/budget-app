import Filter from './Filter';
import LatestExpense from './LatestExpense';
import './main.css'

function Main() {
  return  (
        <div id="wrapper">
            <Filter />,
            <LatestExpense />
        </div>

    );
}

export default Main;