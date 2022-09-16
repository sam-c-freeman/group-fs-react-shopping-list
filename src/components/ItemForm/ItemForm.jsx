import axios from 'axios';
import { useState } from 'react';

export default function ItemForm(){
    // inputs from form fields 
    // POST to database
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [quantityUnit, setQuantityUnit] = useState('');

    const addItem = ()=> {
        e.preventDefault();
        axios({
            method: 'POST',
            url: '/items',
            data: {
                name: itemName,
                quantity: itemQuantity,
                unit: quantityUnit
            }            
        }).then((response)=> {
            console.log(response);
        }).catch((error)=> {
            console.log('error adding item', error);
        })
    }



    return(
        <form onSubmit={addItem}>
            <label htmlFor="name-input">Name:</label>
            <input 
                type="text"
                value={itemName}
                onChange={ (e) => setItemName(e.target.value)}
            />
            <label htmlFor="name-input">Quantity:</label>
            <input
                type="number"
                value={itemQuantity}
                onChange={ (e) => setItemQuantity(e.target.value)}
            />
            <label htmlFor="name-input">Unit:</label>
            <input
                type="text"
                value={quantityUnit}
                onChange={ (e) => setQuantityUnit(e.target.value)}
            />
            <button>Save</button>
        </form>
    )
}

