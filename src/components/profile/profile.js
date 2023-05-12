import { ProfileStyled, Image, WrapperCard, Ptextname, Ptexttag, Stats, StatsLi, SpanLabel, SpanQuantity } from "./profile.styled"
import PropTypes from 'prop-types';

export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) =>{
    return (
        <ProfileStyled>
        <WrapperCard> 
               <Image src={avatar}  alt="User avatar" className="avatar" />
               <Ptextname>{username}</Ptextname>
               <Ptexttag>@{tag}</Ptexttag>
               <Ptexttag>{location}</Ptexttag>
               </WrapperCard>
            <Stats>
                <StatsLi>
                    <SpanLabel>Followers</SpanLabel>
                    <SpanQuantity>{followers}</SpanQuantity>
                </StatsLi>
                <StatsLi>
                    <SpanLabel>Views</SpanLabel>
                    <SpanQuantity>{views}</SpanQuantity>
                </StatsLi>
                <StatsLi>
                    <SpanLabel>Likes</SpanLabel>
                    <SpanQuantity>{likes}</SpanQuantity>
                </StatsLi>
            </Stats>
        </ProfileStyled>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}

