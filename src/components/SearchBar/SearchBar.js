import React from 'react'
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = () => {
   const renderSortByOptions = () => {
             Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}> {sortByOption} </li>;
        });
      }

  return (
    <div class="SearchBar">
    <div class="SearchBar-sort-options">
      <ul>
        {renderSortByOptions}
      </ul>
    </div>
    <div class="SearchBar-fields">
      <input placeholder="Search Businesses" />
      <input placeholder="Where?" />
    </div>
    <div class="SearchBar-submit">
      <a>Let's Go</a>
    </div>
  </div>
  )
}

export default SearchBar