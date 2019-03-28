import React, { FunctionComponent, FunctionComponentElement } from 'react';

import Button from './components/Button/Button';

// import logo from './logo.svg';

const App: FunctionComponent<{}> =
  (): FunctionComponentElement<{}> => (
    <Button>Hello world</Button>
  );

export default App;
