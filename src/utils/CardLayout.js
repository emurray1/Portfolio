import React, { Component } from 'react';
import classnames from 'classnames';
import { Typography, 
         Card, 
         CardMedia,
         CardContent, 
         CardHeader,
         CardActions,
         IconButton,
         withStyles,
         Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import * as WorkData from '../data/WorkData.json';

const styles = theme => ({
    media: {
        height: 250,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
});

class CardLayout extends Component {    
    constructor(props){
        super(props);

        this.state = {
            cards: {},
            expanded: false, 
            raised: false
        }    
    }
    
    componentDidMount() {
        this.setState({cards: WorkData.cards});
        console.log(state);
    }
    
    toggleRaised = () => {
        this.setState((state) => ({raised: !state.raised}))
    }
        
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    }

    render() {
        const { classes } = this.props;  
        return (
            <Card 
                onMouseOver={this.toggleRaised}
                onMouseOut={this.toggleRaised}
                raised={this.state.raised}
            >
                <CardHeader
                    title={this.state.cards.title}
                    subheader={this.state.cards.subHeader}
                />
                <CardMedia 
                    className={classes.media}
                    image={this.state.cards.img}
                    title={this.state.cards.imgTitle}
                />
            <CardContent>
                <Typography className="px-5" variant="caption" align="center" gutterBottom>
                    {this.state.cards.caption}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {this.state.cards.content}
                </Typography>
            </CardContent>
            <CardActions  disableActionSpacing>
                <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                      })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>      
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography variant="subtitle1" gutterBottom>                                  
                    {this.state.cards.hiddenContent}
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        )
    }
}
export default withStyles(styles)(CardLayout);