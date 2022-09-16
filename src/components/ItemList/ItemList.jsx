function ItemList ({itemList, deleteOneItem, updateStatus}) {

    return (
        itemList.map((item) => {

            return(
            <div key = {item.id}>
                <p>{item.name}</p>
                <p>{item.quantity} {item.units}</p>
                {item.status ? <p>Purchased!</p> : 
                <>
                    <button onClick={ () => updateStatus(item.id) }>BUY</button>
                    <button onClick={ () => deleteOneItem(item.id) }>Remove</button>
                </>}
            </div> 
            )}
    ))   
}

export default ItemList;