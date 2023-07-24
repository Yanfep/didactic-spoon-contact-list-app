import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();

	const [users, setUsers] = useState('');


	useEffect(() => {
		setUsers(JSON.parse(localStorage.getItem('tasks')))
	}, []); 

	

	return (
		<div className="jumbotron">
			<h1 className="display-4">
			
			{!users ? ('NO') : (
				
				<div>
					<ul>
						
						<li>
						 <b>Name:</b> {users[theid].name}
						</li>
						<li>
						<b>Username:</b> {users[theid].username}
						</li>
						<li>
						<b>Email:</b> {users[theid].email}
						</li>
						<li>
						<b>Address:</b> {users[theid].address.street + ", "} 
						 {users[theid].address.suite + ", "} 
						 {users[theid].address.city}  
						</li>
						


					</ul>
				</div>
			
				)}
			</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};