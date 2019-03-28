import React, {
  FunctionComponent,
  FunctionComponentElement,
} from 'react';

import { myButton } from './Button.module.css';

interface Props {
  /** Here is a description about the onClick prop */
  onClick?: () => void;
}

/**
 * The only true button.
 *
 * @version 1.0.0
 */
const Button: FunctionComponent<Props> =
  ({ children, onClick }): FunctionComponentElement<Props> => (
    <button className={myButton} onClick={onClick}>
      {children}
    </button>
  );

/**
 * You need to define the default props like this in order for them
 * to be picked up by styleguidist.
 */
Button.defaultProps = {
  onClick: function () { },
};

export default Button;
