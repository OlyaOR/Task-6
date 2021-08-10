const List = ({list, deleteEmployee}) => (
    <div className='employee-items'>
        <h2>Список сотрудников</h2>
        {list.map((elem) => (
            <div key={elem.id} className='employee-item'>
                <div>{elem.first_name}</div>
                <button className='delete-btn' type="button" onClick={() => deleteEmployee(elem.id)}>Удалить</button>
            </div>
        ))}
    </div> 
);
  
export default List;