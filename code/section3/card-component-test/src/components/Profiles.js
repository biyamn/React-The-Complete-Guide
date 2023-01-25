import './Profiles.css';
import Profile from './Profile';

function Profiles() {
  const data = [
    {
      id: 'e1',
      name: '햄',
      age: 2,
      mbti: 'love',
    },
    {
      id: 'e2',
      name: '기니',
      age: 3,
      mbti: 'cute',
    },
    {
      id: 'e3',
      name: '팬더',
      age: 1,
      mbti: 'sexy',
    }
  ]
  return (
    <div className='container'>
      <Profile data={data[0]}/>
      <Profile data={data[1]}/>
      <Profile data={data[2]}/>
    </div>
  )
}

export default Profiles;