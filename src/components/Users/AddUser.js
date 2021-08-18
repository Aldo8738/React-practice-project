import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';


const AddUser = props => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	// const [validUsername, setValidUsername] = useState(true);
	// const [validAge, setValidAge] = useState(true);

	const addUserHandler = event => {
		event.preventDefault();
		
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			return;
		}
		if (+enteredAge < 1) {
			return;
		}
		props.onAddUser(enteredUsername, enteredAge);
		setEnteredUsername('');
		setEnteredAge('');

		//event.target.reset();
	}

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value);
	};
	
	const ageChangeHandler = event => {
		setEnteredAge(event.target.value);
	};

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" value={enteredUsername} type="text" onChange={usernameChangeHandler} ></input>
				<label htmlFor="age">Age (Years)</label>
				<input id="age" value={enteredAge} type="number" onChange={ageChangeHandler}></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
		
	);
};

export default AddUser;