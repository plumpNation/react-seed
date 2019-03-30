import React, { FunctionComponent, FunctionComponentElement } from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Theme from '../../../../themes/Theme';

interface Props {
  classes: Record<string, any>;
}

const styles = {
  root: {
    flexGrow: 1,
  },
};

const MainAppBar: FunctionComponent<Props> =
  ({ classes }): FunctionComponentElement<Props> => (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h1" color="inherit">
            Oslo univeristetsskyehus
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );

export default withStyles(styles)(MainAppBar);
