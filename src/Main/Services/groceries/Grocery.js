import './Grocery.css';

function Grocery(props) {
  console.log(props);
  return (
    <>
      <div className='grocery-container'>
        <h3>Welcome to Grocery App</h3>
        <div>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Price' />
          <button type='button'>Add</button>
        </div>

        <div>Grocery List</div>
        <ul>
          {props.list.map((item) => (
            <li>
              {item.name} : {item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Grocery;
