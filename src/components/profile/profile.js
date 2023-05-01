import { ProfileStyled, Image, WrapperCard, Ptextname, Ptexttag, Stats, StatsLi, SpanLabel, SpanQuantity } from "./profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) =>{
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
                    <SpanQuantity>{stats.followers}</SpanQuantity>
                </StatsLi>
                <StatsLi>
                    <SpanLabel>Views</SpanLabel>
                    <SpanQuantity>{stats.views}</SpanQuantity>
                </StatsLi>
                <StatsLi>
                    <SpanLabel>Likes</SpanLabel>
                    <SpanQuantity>{stats.likes}</SpanQuantity>
                </StatsLi>
            </Stats>
        </ProfileStyled>
    )
}