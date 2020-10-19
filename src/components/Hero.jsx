import React from 'react'
import SbEditable from 'storyblok-react'

const Hero = ({ blok }) => (
  <SbEditable content={blok} key={blok._uid}>
    <div className="py-4 bg-gray-800">
      <div className="container mx-auto">
        <h1 className="ml-4 text-xl font-semibold text-gray-400">
          {blok.headline}
        </h1>
      </div>
    </div>
  </SbEditable>
)

export default Hero
