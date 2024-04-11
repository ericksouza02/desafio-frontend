import React,{useState} from 'react';
import './App.css'
import Header from './components/Header'
import FilterBar from './components/FilterBar'
import FilterContextProvider from './contexts/filter-context';
const App = () =>  {
  const [count, setCount] = useState(0)

  
  return (
    <div className='main'>
      <FilterContextProvider>
        <Header/>
        <FilterBar/>
      </FilterContextProvider>
    </div>
  )
}

export default App;
