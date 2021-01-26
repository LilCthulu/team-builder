import './App.css';
import React, {useState} from "react";
import Form from "./Form";



function App() {
  
  const nullUser = {
    name: "",
    email: "",
    role: "",
  }
  
  const [user, setUser] = useState(nullUser);

  
  const updateForm = (inputName, inputValue) => {
    setUser({
      ...user,
      [inputName]: inputValue
    })
  }

  const submitForm = () => {
    const newFriend = {
      username: user.username.trim(),
      email: user.email.trim(),
      role: user.role,
    }}

  return (
    <div className="App">
      <Form  
      value={user}
        update= {updateForm}
        submit= {submitForm}/>
    </div>
  );
}

export default App;
