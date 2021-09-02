import React, { useState, Fragment, useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';


const AddUser = props => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();


	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();
	// const [validUsername, setValidUsername] = useState(true);
	// const [validAge, setValidAge] = useState(true);

	const addUserHandler = event => {
		event.preventDefault();
		//ref instead
		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).'
			});
			return;
		}
		if (+enteredUserAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0).'
			});
			return;
		}
		props.onAddUser(enteredName, enteredUserAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
		// setEnteredUsername('');
		// setEnteredAge('');

		//event.target.reset();
	}

	// const usernameChangeHandler = event => {
	// 	setEnteredUsername(event.target.value);
	// };
	
	// const ageChangeHandler = event => {
	// 	setEnteredAge(event.target.value);
	// };

	const errorHandler = () => {
		setError(null);
	}

	return (
		<Fragment>
			{error && 
			<ErrorModal 
				key="error-modal"
				title={error.title} 
				message={error.message} 
				onConfirm={errorHandler}
			/>}
			<Card className={classes.input} key="add-user-modal">
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input 
						id="username" 
						 
						type="text" 
						 
						ref={nameInputRef}>
					</input>
					<label htmlFor="age">Age (Years)</label>
					<input 
						id="age" 
						//value={enteredAge} 
						type="number" 
						//onChange={ageChangeHandler}
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</Fragment>
	);
};

export default AddUser;