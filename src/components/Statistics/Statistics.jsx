import PropTypes from 'prop-types'

import {StatisticsList, StatisticOption} from './statistics.styled'

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
return(
    <StatisticsList> 
        <li><StatisticOption>Good:</StatisticOption>{good}</li>
        <li><StatisticOption>Neutral:</StatisticOption>{neutral}</li>
        <li><StatisticOption>Bad:</StatisticOption>{bad}</li>
        <li><StatisticOption>Total:</StatisticOption>{total}</li>
        <li><StatisticOption>Positive feedbacks:</StatisticOption>{positivePercentage}%</li>

        </StatisticsList>
 )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
     bad: PropTypes.number.isRequired,  
     total: PropTypes.number.isRequired,  
     positivePercentage: PropTypes.number.isRequired, 
   
  };
