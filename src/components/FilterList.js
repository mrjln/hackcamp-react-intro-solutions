import React from 'react'

export const FilterList = ({filters, onSelectTab, count}) => (
  <div className="tab-filter-wrapper">
    <div className="tab-filter">
      <div className="filters">
        <ul className="filters-list">
          {filters.map(filter => (
            <li
              key={filter.category}
              onClick={() => onSelectTab(filter.category)}
            >
              <a className={filter.selected ? 'selected' : ''}>
                {filter.category}
              </a>
            </li>
          ))}
        </ul>
        <ul className="misc">
          <li className="counter">
            <a>{count}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
)
