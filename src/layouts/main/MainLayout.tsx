import React, { FunctionComponent, FunctionComponentElement } from 'react';

import AppBar from './components/AppBar/AppBar';

interface Props {
  wot?: string;
}

const MainLayout: FunctionComponent<Props> =
  ({ wot }): FunctionComponentElement<Props> => (
    <AppBar />
  );

MainLayout.defaultProps = {
  wot: 'Main screen'
};

export default MainLayout;
