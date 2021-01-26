import React from "react";

export default function Form(props) {
  const { value, update, submit } = props

  

  
  const onChange = (evt)=> {
    const {name, value} = evt.target
    update(name, value)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit()
  }



return(
  <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>

        <label>Username

          <input
          type='text'
          name= 'username'
          value= {value.username}
          placeholder= 'Username'
          onChange= {onChange}

          ></input>

        </label>

        <label>Email
         
          <input
          type='email'
          name= 'Email'
          value= {value.email}
          placeholder= 'Email'
          onChange= {onChange}

          ></input>
        
        </label>
        <label>Role
          <select
            name= 'role'
            value= {value.role}
            onchange= {onChange}cd
            placeholder= 'Role'
          >
          <option value= ''>-----Select Role-----</option>
          <option value= 'tl'>Team Lead</option>
          <option value= 'instructor'>Instructor</option>
          <option value= 'student'>Student</option>
          </select>
        </label>

        <div className='submit'>
          <button >submit</button>
        </div>
      </div>
    </form>
)

};

