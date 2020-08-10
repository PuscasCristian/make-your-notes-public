import React, { useState } from 'react';
import Header from './comps/Header';
import Form from './comps/Form';
import DisplayThoughts from './comps/DisplayThoughts'
import Modal from './comps/Modal';

function App() {
  const [modalVisibility, setModalVisibility] = useState(null);
  const [modalData, setModalData] = useState(null);  
  return (
    <div className="App">
      <Header />
      <Form />
      <DisplayThoughts ModelDataProp={setModalData} modalData={modalData} ModalVisibility={setModalVisibility}/>
      { modalVisibility && <Modal modalData={modalData} ModalVisibility={setModalVisibility}/>}
    </div>
  );
}

export default App;
