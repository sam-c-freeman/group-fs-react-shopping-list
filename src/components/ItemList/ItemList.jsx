function ItemList ({props}) {
    let itemList = props;
    console.log(itemList);
    return (
        itemList.map((item) => {
            return(
            <div key = {item.id}>
                <p>{item.name}</p>
                <p>{item.quantity} {item.units}</p>
                <button>Buy</button>
                <button>Remove</button>
            </div> 
            )}
    ))
}

export default ItemList;