import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial'
  }
};

class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;


  const hero1 = new Hero('credentials', '"a benevolent ~ smile"');
/*buttons are stupid, the card itself should be clickable*/
  return (
    <div>
      <Card className={classes.card}>

<ButtonBase
          className={props.classes.cardAction}
          onClick={event => { console.log("fuck") }}
      >

        <CardContent>
          <Typography className={classes.title} color="textSecondary">
           {props.subject}
          </Typography>
          <Typography variant="headline" component="h2">
            {props.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            
            {props.sub}

          </Typography>
          <Typography component="p">
            
            {props.desc}
           
          </Typography>
        </CardContent>

</ButtonBase>

      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
