import React, {useState, useEffect} from 'react';
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
    }, []);

    //GET request function

    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/items'
        })
        .then ((response) => {
            console.log(response.data);
            setItemList(response.data);
        })
        .catch((error) => {
            console.log ('fetchItems failed', error);
        })

    }


    //POST  request function

    //addItem();



    //delete (all) function
    const clearBasket = () => {
        console.log('DELETE');
        axios({
            method: 'DELETE',
            url: '/items'
        })
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log ('clearBasket failed', error)
        })
    }

    //PUT (all) to reset list

    const resetBasket = () => {
        console.log('RESET');
        axios({
            method: 'PUT',
            url: '/items'
        })
        .then((response) => {
            console.log(response);
            fetchItems();
        })
        .catch((error) => {
            console.log ('clearBasket failed', error)
        })
    }

    //DELETE/ID individual item function to pass to ItemList

    //PUT/ID to update individual items 

    
    return (
        <div className="App">
            <Header />
                
            <Basket 
                resetBasket = {resetBasket}
                clearBasket = {clearBasket}
            />
        

        </div>
    );
}

export default App;
