import React from 'react'
import SbEditable from 'storyblok-react'
import { render } from 'storyblok-rich-text-react-renderer'

const PageContent = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="container mx-auto mt-4" v-editable="blok">
        <div className="prose lg:prose-xl">{render(blok.content)}</div>
      </div>
    </SbEditable>
  )
}

export default PageContent
