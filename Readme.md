# Font subsetting for faster web pages

Create a subset font from an existing font in SFNT (TrueType/OpenType), WOFF, or WOFF2 format.

This is a ready-to-use, swap-in-your-filepaths, minimal working example of https://github.com/papandreou/subset-font with some additional comments. 

If you are looking for a one-off, easy to use tool https://github.com/leodeslf/fontima is probably what you need. 

## Installing and using

git clone 

In the root folder of the repository run:

```javascript
pnpm install
```
Edit the main.js file with the path to the font you're subsetting. This working example comes with Public Sans Black Italic and its license in `/input`.

Then run

```javascript
pnpm run start
```

This should create a subset font in `/input`. 