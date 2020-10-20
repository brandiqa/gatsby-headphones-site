import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => (
  <footer className="py-8 text-sm text-center text-gray-400 bg-gray-800">
    <div className="container flex flex-col justify-between px-8 mx-auto space-y-4 md:flex-row md:space-y-0">
      <span>Copyright @ 2020</span>
      <span className="space-x-2 footer-links">
        <span>Powered by</span>
        <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
          Gatsby
        </a>
        ,
        <a href="https://www.storyblok.com/" target="_blank" rel="noreferrer">
          StoryBlok
        </a>
        <span>&amp;</span>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          TailwindCSS
        </a>
      </span>

      <a
        href="https://github.com/brandiqa/gatsby-headphones-site"
        target="_blank"
        rel="noreferrer"
        className="text-green-400"
      >
        <FaGithub className="inline text-xl" /> Source
      </a>
    </div>
  </footer>
)

export default Footer
