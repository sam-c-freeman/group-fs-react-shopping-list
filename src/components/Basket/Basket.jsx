export default function Basket({resetBasket, clearBasket}) {

    return (
        <>
            <h3>SHOPPING BASKET</h3>
            <input type="button" value="RESET" onClick={ (e) => resetBasket()} />
            <input type="button" value="CLEAR BASKET" onClick={ (e) => clearBasket()}/>
        </>
    );
}