import { useNavigate } from 'react-router-dom';

const Home = () => {
  // useNavigate는 사용자의 클릭 등이 아니라 
  // 폼이 제출됐을 때나 타이머가 만료됐을 경우 등 
  // '코드 안에서' 페이지 이동을 트리거하고 싶을 때 사용한다.
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/products');
  };

  return (
    <>
      <h1>My HomePage</h1>
      <p>
        <button onClick={handleClick}>Navigate</button>
      </p>
    </>
  );
};

export default Home;