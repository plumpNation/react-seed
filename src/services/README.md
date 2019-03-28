Services
========

In this folder you facade your API calls.

Let's not bother with Axios etc or other request libraries, just keep it simple with fetch, and a polyfill if IE11 is required.

```js
async function getThings() {
  const request = await fetch(url);
  const response = url.json();

  return response;
}
```
