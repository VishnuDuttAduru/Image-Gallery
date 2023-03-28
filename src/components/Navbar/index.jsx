import { useState } from 'react'
import searchIcon from '../../assets/icons/search.svg'

const Navbar = ({ value, setValue }) => {
  const [focus, setFocus] = useState(false);
  const [search, setSearch] = useState("");
  const onSearchHandler = ({ target: { value } }) => setSearch(value);
  return (
    <div className='app-nav'>
      <h1 className='app-brand'>Dynamic Web Gallery</h1>
      <div className='search-container' style={{ borderColor: focus ? "White" : null }}>
        <input
          className='search-input'
          placeholder='Search...'
          value={value}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={onSearchHandler}
        />
        <img src={searchIcon} alt="" onClick={() => setValue(search)} />
      </div>
    </div>
  )
}

export default Navbar