import React, { useState } from 'react';

const App = () => {
let [Fullname, setFullname] = useState({
	fname: '',
	lname: ''
})

const handleChange = (event) => {
	let value = event.target.value;
	let name = event.target.name;

	setFullname((prevalue) => {
	return {
		...prevalue, // Spread Operator			
		[name]: value
	}
	})
}
return (
	<>
	<form onSubmit={handelSubmit}>
		<div>
		{/* <h1>Hello <span style={{ color: 'red' }}>{Fullname.fname}</span>
			<span style={{ color: 'green' }}>{Fullname.lname}</span></h1> */}
		<input type='text' placeholder='Enter Your FirstName'
			onChange={handleChange} name='fname' />
		<input type='text' placeholder='Enter Your LastName'
			onChange={handleChange} name='lname' />
		</div>
        <button type="submit">+</button>
	</form>
	</>
)

function handelSubmit(e){
    e.preventDefault()
    console.log(Fullname.fname, Fullname.lname)
}
}

export default App;
