import React, { FunctionComponent, FunctionComponentElement } from 'react';

interface Props {
  wot?: string;
}

const HomeScreen: FunctionComponent<Props> =
  ({ wot }): FunctionComponentElement<Props> => (
    <div>{wot}</div>
  );

HomeScreen.defaultProps = {
  wot: 'Main screen'
};

export default HomeScreen;
