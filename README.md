# GATSBY E-COMMERCE EXAMPLE SITE

This is an example E-Commerce JAMStack static website showcasing performance built using Storyblok, Gatsby and TailwindCSS. You can find the article on Sitepoint.com.

The live version of this project can be found [here](https://gatsby-headphones.netlify.app/). Clone or Fork-Clone the project to your hard-drive then execute the following instructions in order.

## Run Local Build

This project accesses data from SitePoint's StoryBlok account. A public read-only API key is configured at `gatsby-config.js`. Run the following commands to get the demo up and running quickly.

```bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:8000
$ npm run develop # or yarn dev
```

If you would like to manipulate data, you will need a Storyblok account. Simply go through the following instructions, Step 1 - 3:

## 1. Using your own StoryBlok Account

1. [Register](https://app.storyblok.com/#!/signup) at Storyblok for free.
2. Create a new Space and copy the preview token from Dashboard > Settings > API Keys pages
3. Create an `.env.development` file and save the token key-value as : `STORYBLOK_TOKEN=<token>`
4. In `gatsby-config.js`, look for and replace the value for `accessToken` to `process.env.STORYBLOK_API,` within the `gatsby-source-storyblok` plugin configuration section.

## 2. Import Necessary components

You can import the example components through the file `seed.components.json` with the [Storyblok CLI](https://github.com/storyblok/storyblok#push-components). For this you will need your space ID, which you can find in your space **settings**.

First you need to install the Storyblok CLI

```bash
# Install Storyblok CLI if you have not already
npm install -g storyblok # or yarn global add storyblok
```

Then you can push the existing `seed.components.json` structure to Storyblok.

```bash
# how to use
storyblok push-components <SOURCE> --space <SPACE_ID>

# example
storyblok push-components ./seed.components.json --space 12345
```

After the import you will have all the components under `Components` in your left sidebar.

## 3. Create Content

Feel free to create content any way you like. Unfortunately, the navbar menu links are hard-coded. Here's a quick guide you can follow:

1. Home Page(`/home` or `/`): delete all existing components. Add `PageTitle` and `ProductList` components. Fill in the fields accordingly
2. Create Products(`/products`) folder with type Product
3. Inside the Product folder, create multiple products. Make sure to fill in all the fields
4. Create About (`/about`) page. Add `PageTitle` and `PageContent` components.
5. Create Contact(`/contact`) page. Add `PageTitle` and `ContactForm`.

Make sure to hit publish otherwise the content won't be visible on production builds.

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
