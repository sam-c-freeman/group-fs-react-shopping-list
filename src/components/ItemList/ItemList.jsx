function ItemList ({itemList, deleteOneItem}) {
    return (
        itemList.map((item) => {
            return(
            <div key = {item.id}>
                <p>{item.name}</p>
                <p>{item.quantity} {item.units}</p>
                <button>Buy</button>
                <button onClick={ () => deleteOneItem(item.id)}>Remove</button>
            </div> 
            )}
    ))
}

export default ItemList;