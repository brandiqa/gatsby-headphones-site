import React from 'react'

const ContactForm = () => (
  <div className="container mx-auto my-12">
    <div className="w-2/3 mx-auto lg:w-2/5">
      <div>
        <label
          htmlFor="fullname"
          className="text-sm font-bold text-gray-600 uppercase"
        >
          Full Name
        </label>
        <input
          id="fullname"
          className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
          type="text"
          placeholder
        />
      </div>
      <div className="mt-8">
        <label
          htmlFor="email"
          className="text-sm font-bold text-gray-600 uppercase"
        >
          Email
        </label>
        <input
          id="email"
          className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
          type="text"
        />
      </div>
      <div className="mt-8">
        <label
          htmlFor="message"
          className="text-sm font-bold text-gray-600 uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline focus:bg-white"
          defaultValue={''}
        />
      </div>
      <div className="mt-8">
        <button className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-green-700 rounded-lg focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </div>
    </div>
  </div>
)

export default ContactForm
