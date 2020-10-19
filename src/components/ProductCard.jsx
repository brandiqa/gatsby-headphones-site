import React from 'react'
import { Link } from 'gatsby'

const ProductCard = ({ product }) => {
  const resize = (image, option) => {
    var imageService = '//img2.storyblok.com/'
    var path = image.replace('//a.storyblok.com', '')
    return imageService + option + path
  }

  const driverType = value => {
    switch (value) {
      case 'D':
        return 'dynamic'
      case 'BA':
        return 'balanced armature'
      case 'PM':
        return 'planar magnetic'
      case 'E':
        return 'electrostatic'
      case 'BC':
        return 'bone conduction'
      default:
        return 'Unknown'
    }
  }

  const backType = value => {
    switch (value) {
      case 'open':
        return 'open back'
      case 'semi':
        return 'semi open'
      case 'closed':
        return 'closed back'
      default:
        return 'Unknown'
    }
  }

  return (
    <div className="mb-4 overflow-hidden bg-white rounded shadow-lg">
      <div className="px-8 py-4">
        <img
          src={resize(product.image, 'fit-in/240x300/filters:fill(fff)')}
          width="240"
          height="300"
          alt={product.name}
        />
      </div>
      <div className="flex justify-between px-2">
        <Link
          to={product.full_slug}
          className="text-lg font-bold text-green-800"
        >
          {product.brand} {product.model}
        </Link>

        <span className="text-lg font-semibold text-green-700">
          ${product.price}
        </span>
      </div>
      <div className="flex justify-between px-2 py-4 mt-3 text-sm text-gray-700 border-t-2 border-gray-400">
        <span>{driverType(product.driver)}</span>
        <span>{backType(product.backType)}</span>
        <span>{product.impedance} Ohms</span>
      </div>
    </div>
  )
}

export default ProductCard
