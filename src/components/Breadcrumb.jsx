import React from 'react'
import { Link } from 'gatsby'

const Breadcrumb = ({ page }) => (
  <div class="px-4 py-6 text-sm text-gray-500 bg-gray-800">
    <div class="container mx-auto">
      <ul class="flex items-end space-x-2 font-semibold">
        <li>
          <Link
            class="text-gray-300 hover:underline hover:text-gray-100"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
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
