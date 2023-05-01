import PropTypes from 'prop-types';
import { SpanLabel, SpanPercentage } from './datafile.styled';

export const Datafile = ({items: {label, percentage}}) =>{
    return (
    <>
    <SpanLabel>
        {label}
    </SpanLabel>
    <SpanPercentage>
        {percentage}%
    </SpanPercentage>
    </>
    )
}

Datafile.propTypes = {
    items: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};