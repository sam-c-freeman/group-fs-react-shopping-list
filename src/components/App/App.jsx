import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import ItemForm from '../ItemForm/ItemForm.jsx'
import Basket from '../Basket/Basket.jsx'
import ItemList from '../ItemList/ItemList.jsx'
import './App.css';
//if anything doesn't work check above for typos ^^^


function App() {
    
    let [itemList, setItemList] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])


    //GET request function

    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/items'
        })
        .then ((response) => {
            setItemList (response.data);
            // console.log(response.data);
        })
        .catch ((error) => {
            console.log ('get items failed', error);
        })
    }

    //POST  request function

    //addItem();

    //DELETE (all) function

    //PUT (all) to reset list

    //DELETE/ID individual item function to pass to ItemList

    const deleteItem = (id) =>{
        axios({
          method: 'DELETE',
          url:`/items/${id}`,
        })
        .then((response) =>{
            fetchItems();
        })
        .catch((error) => {
            console.log('error in delete individual item', error);
        })
    }

    //PUT/ID to update individual items 

    
    return (
        <div className="App">
        
            <Header />
            
            <main>
                <ItemForm />
                {/*
                <Basket props={itemList, resetAll, deleteAll } />
                <ItemList props={itemList, put/ID, delete/ID} /> */} 
            </main>
            
        </div>
    );
}

export default App;
