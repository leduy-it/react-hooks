import { useState } from "react";
import Content from './Content';
import LeDuy from './LeDuy';
const giftList = [
    "CPU i9", 
    "RAM 32GB", 
    "RGB Keyboard"  
];

const courseList = [
    {
      id: 1,
      name: "HTML, CSS",
    },
    {
      id: 2,
      name: "Javascript",
    },
    {
      id: 3,
      name: "ReactJs",
    },
  ];


function App() {
    const [gift, setGift] = useState() ;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState(2);
    const [checkedbox, setCheckedbox] = useState([]);
    const [show, setShow] = useState(false);
    const [todolist, setTodolist] = useState(() =>{
        const storageJobs = localStorage.getItem("todolist");
        const storedJobsArray = JSON.parse(storageJobs);
        console.log("Storage Jobs: " + storedJobsArray)
        return storedJobsArray ?? []
        })
    const [todo, setTodo] = useState(); 
    console.log(todo)
    const randomGift = () => {
        const index = Math.floor(Math.random() *(giftList.length))
        setGift(giftList[index])
        console.log(index)
    }
    const handleLogin = () => {
        console.log({
            name,
            email,
        })
    }
    const handleSubmit = () => {

        console.log({id : checked})
       
    }
    console.log(checkedbox)
    const handleCheckedbox = (id) => {
        setCheckedbox(prev =>{
           const isChecked = checkedbox.includes(id);
           if (isChecked){
            return checkedbox.filter(item => item !== id)
           }
           else{
            return [...prev, id]
           }
        })
    }
    const handleSubmitCheckbox = () => {
       
    }
    const handleTodolist = () =>{
        setTodolist( prev => {
            const Todolist_data = [...prev, todo]

            const JsonTodolist = JSON.stringify(Todolist_data);
            localStorage.setItem('todolist', JsonTodolist)
            return Todolist_data
        })
        setTodo('')
    }
    return(
    <div>
        <div style={ {padding: 32} }>
            <h1> Get random reward</h1>
            <h3>{gift || 'Chưa có phần thưởng'} </h3>
            <button onClick = {randomGift}>Lấy thưởng</button>
        </div>
        <div>
            
            <div style={ {padding: 32} }>
                <h1>LOGIN PAGE </h1>
                <h5>Enter your name and email address</h5>
                <input 
                    value={name}
                    onChange={setinput => setName(setinput.target.value)}
                />
                <input 
                    value={email}
                    onChange={setinput => setEmail(setinput.target.value)}
                />
                <button onClick = {handleLogin}>Login</button>
            </div>
        </div>
        <div style={ {padding: 32} } >
            <h1>Choose Radio</h1>
            {courseList.map( courseList => (
                <div key = {courseList.id} >
                    <input 
                        type= "radio" 
                        checked={checked === courseList.id}
                        onChange={() => setChecked(courseList.id)}
                    />
                    {courseList.name}
                </div>
            ))}
            <button onClick = {handleSubmit}>Submit</button>
        </div>
        <div style={ {padding: 32} } >
            <h1>Checkbox</h1>
            {courseList.map( courseList => (
                <div key = {courseList.id} >
                    <input 
                        type= "checkbox" 
                        checked={checkedbox.includes(courseList.id)}
                        onChange={() => handleCheckedbox(courseList.id)}
                    />
                    {courseList.name}
                </div>
            ))}
            <button onClick = {handleSubmitCheckbox}>Submit Checkedbox</button>
        </div>
                    
        <div style={ {padding: 32} } >
            <h1>TO-DO-LIST</h1>
            <input value={todo} onChange ={e => setTodo(e.target.value) }/>
            <button onClick = {handleTodolist}> Add Todolist</button>
            <ul>
                {todolist.map( (todolist, index) => (
                    <li key ={index}> {todolist} </li>
                ))}
            </ul>
        </div>
        <div style ={ {padding: 32} }>
            <button onClick = {() => setShow(!show)}> Toggle</button>
            {show && <Content />}
        </div>
        <div style ={ {padding: 32} }>
            {<LeDuy/>}
        </div>
   
    </div> 
    )
}

export default App;