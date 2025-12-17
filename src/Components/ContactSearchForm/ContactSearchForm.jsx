import React from 'react'
import "../ContactSearchForm/ContactSearchForm.css"

export default function ContactSearchForm({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value)
  }
  return (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <i className="bi bi-search search-icon"></i>
        <input
          className='search-input'
          type="text"
          placeholder='Buscar un chat o iniciar uno nuevo'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
