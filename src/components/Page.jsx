import React from 'react'
import SbEditable from 'storyblok-react'
import Components from './Components'
import Layout from '../layout/layout'

const Page = props => (
  <Layout>
    <SbEditable content={props.blok}>
      {props.blok.body &&
        props.blok.body.map(blok =>
          React.createElement(Components(blok.component), {
            key: blok._uid,
            blok: blok,
          })
        )}
    </SbEditable>
  </Layout>
)

export default Page
