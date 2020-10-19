import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ProductCard from './ProductCard'

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

  const productCards = products.map(product => (
    <ProductCard product={product} key={product._uid} />
  ))

  return (
    <div className="container mx-auto mt-2">
      {data.allStoryblokEntry.totalCount}
      <div className="flex flex-wrap justify-center px-4 mt-4 md:justify-between">
        {productCards}
      </div>
    </div>
  )
}

export default ProductList
