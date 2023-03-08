

const Contents = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={data.id}>
          {item.username}
          {item.age}
        </div>
      ))}
    </div>
  );
};

export default Contents;