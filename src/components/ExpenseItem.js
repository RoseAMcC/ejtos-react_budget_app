// ExpenseItem.js
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

// Styles directly in the component
const buttonColumnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const buttonWrapperStyle = {
    display: 'flex',
    gap: '100px', // Adjust the gap as needed for spacing between buttons
};

const buttonStyle = {
    margin: '0',    // Reset margin
    padding: '-10',   // Reset padding
    borderRadius: '50%', // Make it a circle
    width: '40px',  // Set width and height for a specific size
    height: '40px',
    background: 'green', // Green background
    color: 'white', // White text color
    border: 'none', // No border
    cursor: 'pointer', // Change cursor on hover
    fontSize: '1.6em', // Adjust font size
};

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td style={buttonColumnStyle}>
                <div style={buttonWrapperStyle}>
                    <button style={buttonStyle} onClick={() => increaseAllocation(props.name)}>+</button>
                    <button style={buttonStyle} onClick={() => decreaseAllocation(props.name)}>-</button>
                </div>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};

export default ExpenseItem;
