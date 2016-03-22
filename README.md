The Rijkshuisstijl is the official style guide for apps and sites in the Dutch public sector. In this package, Bootstrap is adapted to the style guide.


## Using Rijks-Bootstrap

Include the stylesheets, fonts, images and javascript libraries in dist/. Then, build your site or application like you would with Bootstrap. For an example, check sample-login.html and sample-ui-elements.html.

Rijks-bootstrap comes with jQuery, HoverIntent, Superfish and Bootstrap. If your project already includes jQuery, HoverIntent or Superfish, package your own js libaries.

For an example, check http://gepiter.com/rijks-bootstrap/sample-ui-elements.html

## Building

The package uses Gulp to build LESS, concatenate styling and concatenate the required javascript libraries. To build the package, run:

```bash
npm install
```

To watch for file changes and build on the fly:

```bash
npm start
```

## Webpack

To compile Rijks-bootstrap with  Webpack, install the loaders for .less and .woff files with:

```bash
npm install --save-dev less less-loader style-loader css-loader file-loader url-loader
```

Configure webpack with:

```js
module: {
  loaders: [
    { test: /\.less/,
      loaders: ['style', 'css', 'less']
    },
    { test: /\.woff/,
      loaders: ['file', 'url']
    }
  ]
}
```

## Licence

The examples and styling are in the public domain, under the Creative Commons zero licence (CC0).

The Rijksoverheid logo and font are copyrighted. Check https://www.rijkshuisstijl.nl/copyright/auteursrecht-rijkshuisstijl on how to obtain permission to use the logo and fonts.