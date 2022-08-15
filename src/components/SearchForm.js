import React, {useState} from 'react';
import { useStateContext } from '../context/StateContextProvider';


const SearchForm = () => {

  const [text, setText] = useState("");

  const {setSearchTerm} = useStateContext();

  const handleSubmit = (e) => { 
    e.preventDefault()
    setSearchTerm(text)
  }

  return (
    <div className='section search'>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label>search your cocktail</label>
          <input type="text"
                 value={text}
                 onChange={(e)=>setText(e.target.value)}
          />
        </div>

      </form>
    </div>
  )
}

export default SearchForm