This is an example of the Button component.

NOTE: The use of the data-cy attribute as a cypress test hook.

This makes it very clear what the purpose of the attribute is, unlike a class
or id that is meant for use when running functional browser tests.

Note also that the data-cy it is on the container as it is not passed onto the
react component.

```jsx
<div data-cy="ui-button-1">
  <Button onClick={() => {
    testConsole('clicked button 1');
  }}>
    Hello
  </Button>
</div>
```

By using the `testConsole` function I can easily test a callback by spying on it
in Cypress.

Read more about [best practices according to the cypress team](https://docs.cypress.io/examples/examples/tutorials.html#Best-Practices).
