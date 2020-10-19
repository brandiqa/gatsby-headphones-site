import React from 'react'

import Layout from '../layout/layout'
import SEO from '../layout/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-700">404: Not Found</h1>
        <p className="text-lg font-light text-gray-700">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
