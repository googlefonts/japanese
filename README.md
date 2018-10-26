# Google Fonts + 日本語 早期アクセス

As Google makes progress on supporting Japanese web typography, we invite designers and developers to experiment with these Japanese web fonts now available from Google Fonts Early Access.

This repository contains the type specimen site built to showcase the collection.

This project is not an official Google project, and Google provides no support for it.

## Running the project locally

The following instructions are for running the site locally, particularly if you’d like to add a new specimen!

To run this static site locally, you’ll need to have a recent stable version of [Node.js](https://nodejs.org) installed. (Node.js isn’t used in production and you don’t really need to know much about it to contribute to the site. [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack), a preconfigured version of [Webpack](https://github.com/webpack/webpack), is used as the static site generator and compile the Sass files, metadata, and [React](https://reactjs.org/) components into HTML, CSS, and JavaScript.

### Getting started

To get started, clone this project locally by running the following command in your terminal:

```sh
# Clone the project
https://github.com/googlefonts/japanese googlefonts-japanese

# Move into the project directory
cd googlefonts-japanese
```

Node.js comes with [npm](https://npmjs.org), the package manager for JavaScript. Use it to install the project’s dependencies (the other JavaScript libraries and tools listed in the `package.json` file) by running the following command:

```sh
# Install dependencies
npm install
```

## Serving the site

Now, you’re ready to run the project in the browser. Run the following commands in your terminal:

```sh
# Run the project at http://localhost:3000
npm start
```

## Compiling the site

You can compile the site to static HTML, CSS, and JavaScript at any point using the following command:

```sh
npm run build
```

This will compile the site to a `./build` directory using Webpack.

## Deploy the site

If you are contributing a new specimen, don’t worry about deploying the site. Make your changes on a branch, and then open those as a new Pull Request on GitHub.

If you have permissions on the repository, the latest version of the site can be deployed to GitHub Pages by running:

```
# Build the site and commit it to the gh-pages branch
npm run deploy
```

To deploy to the staging domain, you’ll need permission from [@kennethormandy](https://github.com/kennethormandy). Run the following command:

```sh
npm run stage
```
