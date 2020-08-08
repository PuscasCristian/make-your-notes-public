import React, { useState, useEffect} from 'react';
import Header from './comps/Header';
import Form from './comps/Form';
import DisplayThoughts from './comps/DisplayThoughts'
import Modal from './comps/Modal';

function App() {
  const [modalData, setModalData] = useState(null);  

  return (
    <div className="App">
      <Header />
      <Form />
      <DisplayThoughts ModelDataProp={setModalData}/>
      {/* { modalVisibility && <Modal modalData={modalData} />} */}
    </div>
  );
}

export default App;
