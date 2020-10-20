import React from 'react'

const SortPanel = ({ totalCount, sortBy, updateSortBy }) => {
  const handleOnChange = e => {
    updateSortBy(e.target.value)
  }

  return (
    <div className="flex items-center justify-between px-2 py-4 bg-gray-300 md:px-4">
      <div className="inline-flex items-center space-x-2">
        <label
          className="font-semibold text-gray-700 text-md"
          htmlFor="sort-input"
        >
          Sort By
        </label>
        <select
          className="px-2 py-2 text-sm leading-tight text-gray-700 bg-gray-100 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
          id="sort-input"
          value={sortBy}
          onChange={handleOnChange}
        >
          <option value="default">Default</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-lo">Price (Low to High)</option>
          <option value="price-hi">Price (High to Low)</option>
        </select>
      </div>
      <span className="text-sm font-semibold text-gray-700">
        {totalCount} headphones
      </span>
    </div>
  )
}

export default SortPanel
