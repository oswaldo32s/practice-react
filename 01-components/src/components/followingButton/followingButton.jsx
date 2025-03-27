import { useState } from 'react'

export default function FollowingButton({following = false}) {
  const [isFollowing, setIsFollowing] = useState(following)
  return (
    <button
    className={isFollowing ? 'followingBtn' : 'notFollowBtn'}
    onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  )
}