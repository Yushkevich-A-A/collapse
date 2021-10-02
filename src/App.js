import './App.css';
import Collapse from './Components/Collapse/Collapse';

const content = `Альфа-Банк, основанный в 1990 году, является универсальным банком,
осуществляющим все основные виды банковских операций, представленных
на рынке финансовых услуг, включая обслуживание частных и корпоративных
клиентов, инвестиционный банковский бизнес, торговое финансирование и т.д.`

function App() {
  return (
    <div className="App">
      <Collapse>
      {
        (isHidden) => isHidden ? content : null
      }
      </Collapse>
    </div>
  );
}

export default App;
