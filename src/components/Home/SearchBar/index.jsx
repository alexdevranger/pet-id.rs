import React from 'react';


const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='w-full flex justify-center mt-12 pb-16'>
    <div className='w-[90%] md:w-[50%]'>
      <form onSubmit={formSubmit}>   
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
            type='text'
            placeholder='Pretrazi po kategorijama'
            value={value}
            onChange={handleSearchKey}
          />
          {value && <span onClick={clearSearch}>X</span>}
          <button className="text-[#3BC77E] hover:text-white absolute right-2.5 bottom-2.5 bg-white hover:bg-[#3BC77E] focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-white dark:hover:bg-[#3BC77E]">Search</button>
        </div>
      </form>
    </div>
  </div>
);

export default SearchBar;