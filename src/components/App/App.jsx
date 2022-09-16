import React from 'react';
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
    }, [])


    //GET request function

    const fetchStudents = () =>{
        axios({
            method: 'GET',
            url: '/students'
        })
        .then ((response) => {
            setStudentList(response.data);
        })
        .catch((error) => {
            console.log ('fetchStudents failed', error);
        })

    }

    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/items'
        })
    }





    //POST  request function

    //addItem();



    //DELETE (all) function

    //PUT (all) to reset list

    //DELETE/ID individual item function to pass to ItemList

    //PUT/ID to update individual items 

    
    return (
        <div className="App">
            <Header />
            <main>
                {/* <ItemForm props={addItem} />
                <Basket props={itemList, resetAll, deleteAll } />
                <ItemList props={itemList, put/ID, delete/ID} /> */} 
            </main>
        </div>
    );
}

export default App;
