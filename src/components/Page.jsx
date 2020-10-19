import React from 'react'
import Components from './Components'
import Layout from '../layout/layout'

// import SbEditable from 'storyblok-react'

// const Page = ({ blok }) => {
//   const content =
//     blok.body &&
//     blok.body.map(childBlok => (
//       <Components blok={childBlok} key={childBlok._uid} />
//     ))
//   return <SbEditable content={blok}>{content}</SbEditable>
// }

const Page = props => (
  <Layout>
    {props.blok.body &&
      props.blok.body.map(blok =>
        React.createElement(Components(blok.component), {
          key: blok._uid,
          blok: blok,
        })
      )}
  </Layout>
)

export default Page
