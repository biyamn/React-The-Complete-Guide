

const Contents = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <li>
          {item.username}
          {item.age}
        </li>
      ))}
    </div>
  );
};

export default Contents;