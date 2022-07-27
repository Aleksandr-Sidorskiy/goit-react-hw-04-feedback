import {useState} from "react";
// import React from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./SectionTitle/SectionTitle";
import Notification from "./Notification/Notification";

import { Container, Wrapper } from './StyleApp';

function App (){
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

// ========================================================

  const handleClick = e => {
    const option = e.target.name;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:

        console.log(`No option called ${option}`);
        break;
    }
  }
  // ========================================================
  const countTotalFeedback = () => good + neutral + bad;
  
  
  // ========================================================
    const countPositiveFeedback = () => {
    const totalFeedback = countTotalFeedback();
    const goodFeedback = good;
    let result = 0;

    if (totalFeedback > 0) {
      result = Math.round((goodFeedback / totalFeedback) * 100);
    }

    return `${result}%`;
  };
  // ========================================================
  
    return (
      <Container>
        <Wrapper>
          
            <Section title="Please leave feedback">
             <FeedbackOptions
              options={{ good, neutral, bad }}
              onLeaveFeedback={handleClick}
            />
            
          </Section>

          <Section title="Statistics">
            
          {countTotalFeedback( ) > 0 ? (
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage ={countPositiveFeedback()}
                
            />
          ) : (
              <Notification message="There is no feedback"/>
        )}
          
        </Section>
        </Wrapper>
      </Container>
    )
  }
// }


export default App;