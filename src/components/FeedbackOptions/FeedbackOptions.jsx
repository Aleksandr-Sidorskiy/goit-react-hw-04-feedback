import React from "react";
import { List, Item, Button, theme } from './StyleFeedbackOptions';
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
    console.log(options);
    const data = Object.keys(options)
    return (
        <List>
        {data.map(option => (
            <Item  key={option}>
                <Button theme={theme}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                {option}
            </Button>
            </Item>
      ))}
            
        </List>
    )
}

FeedbackOptions.propTypes = {
    //  options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback:PropTypes.func.isRequired,
}




export default FeedbackOptions;

