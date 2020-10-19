import React from 'react'
import SbEditable from 'storyblok-react'

import Breadcrumb from './Breadcrumb'
import { resize, driverType, backType } from '../utils/lib'

const Product = ({ blok }) => (
  <SbEditable content={blok}>
    <Breadcrumb page={blok.brand + ' ' + blok.model} />
    <div className="flex flex-col justify-center p-4 mt-4 bg-white md:space-x-16 md:flex-row place-items-center container-mx-auto">
      <div className="px-4">
        <img src={resize(blok.image, 'fit-in/400x400')} />
      </div>
      <div className="px-4">
        <h2 className="text-4xl font-bold tracking-wider">
          {blok.brand} {blok.model}
        </h2>
        <h3 className="text-xl font-semibold text-green-700">$ {blok.price}</h3>
        <div className="mt-4 md:mt-16">
          <h4 className="text-lg font-semibold text-gray-800">SPECS</h4>
          <ul className="pl-8 mt-2 text-gray-700 list-disc">
            <li className="capitalize">
              Transducer Type: {driverType(blok.driver)}
            </li>
            <li>Operating Principle: {backType(blok.backType)} </li>
            <li className="capitalize">Pad Type: {blok.padType}</li>
            <li>Impedance: {blok.impedance} Ohms</li>
          </ul>
          <button className="w-full py-4 mt-8 font-semibold text-center text-gray-200 bg-gray-800 md:mt-16 hover:bg-gray-900 hover:text-white">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  </SbEditable>
)

export default Product
