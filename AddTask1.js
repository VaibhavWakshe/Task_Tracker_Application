import React, { useState } from 'react';


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [textaa, setTexts] = useState('');
  

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task');
      return;
    }
    if (!text) {
      alert('xjkhaha');
      return;
    }

    onAdd({ text });

    setText('');
    setTexts('');
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={e => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Task Description</label>
        <input type="text" placeholder="Add Description" value={textaa} onChange={e => setTexts(e.target.value)} />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};



export default AddTask;