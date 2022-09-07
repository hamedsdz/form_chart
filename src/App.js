import { useState } from 'react'

// Pages
import AddInfo from './pages/addInfo'
import ShowChart from './pages/showChart'

function App() {
  const [page, setPage] = useState(parseInt(localStorage.getItem('page')) && parseInt(localStorage.getItem('page')) ? 1 : 0)

  const changePageHandler = (newPage) => {
    localStorage.setItem('page', newPage)
    setPage(newPage && newPage ? 1 : newPage)
  }

  return (
    <div className="App">
      {
        page === 1 ? <ShowChart changePage={changePageHandler} /> : <AddInfo changePage={changePageHandler} />
      }
    </div>
  );
}

export default App;
