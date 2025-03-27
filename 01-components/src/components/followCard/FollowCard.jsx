import FollowingButton from "../followingButton/followingButton";

export default function FollowCard({username, name, isFollow = false}) {
  return (
    <section className="followCard">
      <div className="followCardProfileDetail">
        <img className="followCardProfilePic" src={`https://unavatar.io/${username}`} alt="profile picture" />
        <div className="followCardNameContainer">
          <h3 className="followCardFullName">{name}</h3>
          <p className="followCardUsername">@{username}</p>
        </div>
      </div>
      <FollowingButton following={isFollow}/>
    </section>
  )
}