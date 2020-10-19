import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from './ProductCard'
import SortPanel from './SortPanel'

const ProductList = () => {
  const data = useStaticQuery(graphql`
    query Products {
      allStoryblokEntry(filter: { full_slug: { regex: "/products/" } }) {
        edges {
          node {
            name
            slug
            full_slug
            content
            created_at
          }
        }
        totalCount
      }
    }
  `)

  const products = data.allStoryblokEntry.edges.map(edge => {
    const product = JSON.parse(edge.node.content)
    product.full_slug = edge.node.full_slug
    product.name = edge.node.name
    product.created_at = new Date(edge.node.created_at)
    return product
  })

  const [sortBy, setSortBy] = useState('default')

  const sortedProducts = () => {
    if (sortBy === 'name-asc') {
      return products.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'name-desc') {
      return products.sort((a, b) => b.name.localeCompare(a.name))
    } else if (sortBy === 'price-lo') {
      return products.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-hi') {
      return products.sort((a, b) => b.price - a.price)
    } else {
      return products.sort((a, b) => b.created_at - a.created_at)
    }
  }

  const productCards = sortedProducts().map(product => (
    <ProductCard product={product} key={product._uid} />
  ))

  const totalCount = data.allStoryblokEntry.totalCount

  return (
    <div className="container mx-auto mt-2">
      <SortPanel
        class="mx-4"
        totalCount={totalCount}
        sortBy={sortBy}
        updateSortBy={setSortBy}
      />

      <div className="flex flex-wrap justify-center px-4 mt-4 md:justify-between">
        {productCards}
      </div>
    </div>
  )
}

export default ProductList
