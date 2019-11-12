import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: 'none'
    }
  })
);

class SavingDepositDetailsContainer extends Component {
  render() {
    var classes = useStyles();
    return (
      <div>
        <div>
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
          <Button variant="contained" className={classes.button}>
            Default
          </Button>
        </div>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
      </div>
    );
  }
}

export default SavingDepositDetailsContainer;
