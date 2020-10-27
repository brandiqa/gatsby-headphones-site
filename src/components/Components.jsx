import Hero from './Hero'
import Page from './Page'
import Product from './Product'
import ProductList from './ProductList'
import PageContent from './PageContent'
import ContactForm from './ContactForm'
import Placeholder from './Placeholder'

const ComponentList = {
  page: Page,
  hero: Hero,
  'product-list': ProductList,
  product: Product,
  'page-content': PageContent,
  'contact-form': ContactForm,
  placeholder: Placeholder,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return Placeholder
  }
  return ComponentList[type]
}

export default Components
