import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = ({ page }) => (
  <div className="px-4 py-6 text-sm text-gray-500 bg-gray-800">
    <div className="container mx-auto">
      <ul className="flex items-end space-x-2 font-semibold">
        <li>
          <Link
            className="text-gray-300 hover:underline hover:text-gray-100"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </li>
        <li>{page}</li>
      </ul>
    </div>
  </div>
)

export default Breadcrumb
