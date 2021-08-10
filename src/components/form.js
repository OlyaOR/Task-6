import React, { useState } from "react";

const Form = ({addEmployee}) => {
  const [newEmployee, setNewEmployee] = useState({});

  function formSubmit(e) {
    e.preventDefault();
    addEmployee(newEmployee);
    setNewEmployee({});
    e.target.reset();
  }

  function formChange(e) {
    let {name, value} = e.target;
    setNewEmployee((employee) => {
      employee[name] = value;
      return employee;
    });
  }

  return (
    <form onSubmit={formSubmit}>
      <h2>Добавить нового сотрудника</h2>
      <div className='inputs'>
        <input minLength={2} maxLength={20} className='input-employee' type="text" required placeholder="Введите имя сотрудника" name="first_name" onChange={formChange}/>
        <input className='add-btn' type="submit" value="Добавить" />
      </div>
    </form>
  );
};
export default Form;
