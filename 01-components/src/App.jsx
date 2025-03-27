import './App.css'
import FollowCard from './components/followCard/FollowCard'
import FollowingButton from './components/followingButton/followingButton'

function App() {
  return (
    <>
      <FollowCard
      name='Miguel Angel Duran'
      username='midudev'
      isFollow={true}
      />
      <FollowCard
      name='Oswaldo Gonzalez'
      username='oswaldo32s'
      />
      <FollowCard
      name='Fredy Montes'
      username='fmontes'
      />
      <FollowCard
      name='Astro'
      username='astrodotbuild'
      />
    </>
  )
}

export default App
