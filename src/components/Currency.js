import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { selectedCurrency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        // Dispatch an action to update the currency in the context
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="currency" style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}>
                Select Currency:
            </label>
            <select
                id="currency"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                style={{ backgroundColor: 'green', color: 'white', padding: '0.5rem' }}
            >
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
