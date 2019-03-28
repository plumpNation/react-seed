For future proofing, but mainly simplicity, please make all your components
as function components.

Should we need to add state, we can achieve this with [hooks](https://reactjs.org/docs/hooks-overview.html).

Put your styles in a file called {MyComponent}.module.css and import exports as
though it was an ES6 module.

```tsx inside Markdown
import React, { FunctionComponent, FunctionComponentElement } from 'react';

// .some-css-class { }
import { someCssClass } from './MyComponent.module.css';

interface Props {
  /** This is the description of the prop */
  prop1: string,
  /** Another description for an optional prop */
  prop2?: number
};

const MyComponent: FunctionComponent<Props> =
  ({ prop1, prop2 }): FunctionComponentElement<Props> => (
    <div className={someCSSClass}>
      Your component template
      <span>{prop1}: <span>{prop2}</span>
    </div>
  );
```

Write your default props out like this instead of in the ES6 style so that
styleguidist can pick them up. It also means the function signature will be less
cluttered.

```tsx inside Markdown
MyComponent.defaultProps = {
  prop2: 5
};
```
