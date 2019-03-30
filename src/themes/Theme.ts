import { createMuiTheme, Theme } from '@material-ui/core/styles';

const AppTheme: Theme = createMuiTheme({
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 12,
  },
});

export default AppTheme;
