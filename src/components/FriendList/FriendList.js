import { Friends } from "components/friends/friends";
import PropTypes from 'prop-types';
import { LiItem, UlList } from "./friendlist.styled";

export const FriendList = ({friends}) =>{
    return (
        <UlList>
        {friends.map(item => (
        <LiItem key={item.id}>
            <Friends item={item}/>
        </LiItem>
        ))}
        </UlList>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};