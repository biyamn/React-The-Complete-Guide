import Contents from "./components/Contents";
import Form from "./components/Form";
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState([]);

  const onSaveData = (data) => {
    console.log(data);
    setFormData([...formData, data]);
    console.log(formData);
  }
  console.log(formData);
  return (
    <div className={styles.container}>
      <Form onSaveData={onSaveData}/>
      <Contents data={formData} />
    </div>
  );
}

export default App;
