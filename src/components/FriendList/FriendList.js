import PropTypes from 'prop-types';
import { UlList, LiItem, Images, Isonline, Pname  } from "./friendlist.styled";

export const FriendList = ({friends}) =>{
    return (
        <UlList>
            {friends.map(({id, name, avatar, isOnline}) => (

                <FriendListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />
            ))}
        </UlList>
    );
};

const FriendListItem = ({avatar, name, isOnline}) =>{
    return (
        <LiItem >
        <Isonline isOnline={isOnline}></Isonline>
        <Images src={avatar} alt={name} width="48" />
        <Pname>{name}</Pname>
        </LiItem >
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

FriendListItem.propTypes = {
    item: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }).isRequired,
};