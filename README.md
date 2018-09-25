# Next.js - Dynamic \_document.js

## Purpose of this example

If you have a lot of pages that share a common markup, this can be put into `_document.js`,
but what if you have one or two pages, that are spesial and do have other requirements?

This example show you have to change how the markup from `_document.js` on a per page basic.

## What is done

We have a express server, where we from express send in some props to the page.
In `_document.js` you have access to the the page props. So you check after a "magical flag".
Based on then you conditional rendering another version of the wrapper around `<Main>`

You do not need an express server to do this, this works just fine also if you use next built-in `getInitialProps`.

## Start

clone this repo

```sh
npm install
node server.js
```
