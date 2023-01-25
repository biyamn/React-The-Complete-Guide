import Card from "./Card";

function Profile({data}) {

  return (
      <Card className='profile'>
        <h2>profile</h2>
        <div>이름: {data.name}</div>
        <div>나이: {data.age}</div>
        <div>mbti: {data.mbti}</div>
      </Card>
  )
}

export default Profile;