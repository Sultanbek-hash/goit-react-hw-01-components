// import { Datafile } from "components/StatisticsSpan/StatisticsSpan";
import PropTypes from 'prop-types';
import { H2Text, LibgkColor, SectionStat, UlBgkColor, SpanPercentage, SpanLabel } from "./Statistics.styled";


export const Statistics = (props) => {
    const {title, stats} = props;
    return(
        <SectionStat>
      {title && <H2Text>{title}</H2Text>}
    <UlBgkColor>
        {stats.map(item => (
            <LibgkColor key={item.id}>
                <Datafile items={item} />
            </LibgkColor>
        ))}
        </UlBgkColor>
        </SectionStat> 
    )
}

const Datafile = ({items: {label, percentage}}) =>{
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

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

Datafile.propTypes = {
    items: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,
};