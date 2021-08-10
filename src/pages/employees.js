import React, { useState, useEffect } from "react";
import List from "../components/list";
import Form from "../components/form";

const Employees = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch("https://reqres.in/api/users?per_page=12")
            .then((res) => res.json())
            .then((item) => setList(item.data))
            .catch((err) => alert('Error! Something wrong'));
            
    }, []);
    function deleteEmployee(id) {
        setList((el) => el.filter((employee) => employee.id !== id));
    };
    function addEmployee(employee) {
        employee.id = list.length > 0? list[list.length-1].id + 1 : 1;
        setList((el) => el.concat(employee));
    };
    return (
        <section className='employee'>
            <List list={list} deleteEmployee={deleteEmployee} />
            <Form addEmployee={addEmployee} />
        </section>
    );
};

export default Employees;
