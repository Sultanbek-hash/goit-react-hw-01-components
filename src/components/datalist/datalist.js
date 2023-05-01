import { Datafile } from "components/datafile/datafile"
import PropTypes from 'prop-types';
import { DivBoard, H2Text, LibgkColor, SectionStat, UlBgkColor } from "./datalist.styled";

export const Statistics  = ({stats}) => {
    return(
        <SectionStat>
    <DivBoard>
    <H2Text>
            Upload stats
    </H2Text>
    <UlBgkColor>
        {stats.map(item => (
            <LibgkColor key={item.id}>
                <Datafile items={item} />
            </LibgkColor>
        ))}
        </UlBgkColor>
        </DivBoard>
        </SectionStat> 
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};