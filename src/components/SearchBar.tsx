'use client';
import React, {useState} from 'react'
import {SearchManufacturer} from '@/components'

const SearchBar = () => {
  const [manuFacturer, setManuFacturer] = useState('')

  const handleSearch = ()=>{

  }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
              manufacturer = {manuFacturer}
              setManufacturer = {setManuFacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar
