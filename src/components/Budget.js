
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    // const [cost, setCost] = useState('');
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if(newBudget <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
            // setCost("");
            return;
        }
    }
    
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;