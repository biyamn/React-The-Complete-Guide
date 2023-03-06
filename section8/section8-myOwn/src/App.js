import Contents from "./components/Contents";
import Form from "./components/Form";
import styles from './App.module.css';
import { useState } from 'react';
import Modal from 'react-modal'

function App() {
  const [formData, setFormData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSaveData = (data) => {
    if (data.username === '') {
      setIsModalOpen(true);
    }
    setFormData([...formData, data]);
  }

  return (
    <div className={styles.container}>
      <Modal isOpen={isModalOpen} 
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
          },
          content: {
            position: 'absolute',
            width: '200px',
            height: '200px',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px'
          }
        }}
        >
          뭔가 잘못 입력함
        <button onClick={()=> setIsModalOpen(false)}>취소</button>
      </Modal>
      <Form onSaveData={onSaveData}/>
      <Contents data={formData} />
    </div>
  );
}

export default App;
