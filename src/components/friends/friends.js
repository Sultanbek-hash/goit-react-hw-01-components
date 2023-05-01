import PropTypes from 'prop-types';
import { Images, Isonline, Pname } from './friends.styled';

export const Friends = ({item: {avatar, name, isOnline}}) =>{
    return (
        <>
        <Isonline isOnline={isOnline === true}>{isOnline}</Isonline>
        <Images src={avatar} alt="User avatar" width="48" />
        <Pname>{name}</Pname>
        </>
    )
}

Friends.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};