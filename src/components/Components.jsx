import Hero from './Hero'
import Page from './Page'
import Product from './Product'
import ProductList from './ProductList'
import Placeholder from './Placeholder'

const ComponentList = {
  page: Page,
  hero: Hero,
  'product-list': ProductList,
  product: Product,
  placeholder: Placeholder,
}

// const DynamicComponent = ({ blok }) => {
//   console.log('DC', blok)
//   if (typeof ComponentList[blok.component] !== 'undefined') {
//     const Component = ComponentList[blok.component]
//     return <Component blok={blok} key={blok._uid} />
//   }
// }

const DynamicComponent = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return Placeholder
  }
  return ComponentList[type]
}

export default DynamicComponent
