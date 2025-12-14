import ItemCounter from "./shoppinng-cart/ItemCounter"

interface ItemInCart{
    id:number,
    productNma:string,
    productQuantity:number
}

const ItemsInCart:ItemInCart[] = [
    {id: 1, productNma:"Nintendo switch 2", productQuantity: 10},
    {id: 2, productNma:"Pro Controller", productQuantity: 8},
    {id: 3, productNma:"Super Smash", productQuantity: 3},
]

export const FirstStepsApp = () => { //Esto es un componente y se debe escribir capitalizado
    return(
        // <> forma abreviada de <Fragment>
        <>
            <h1>Shopping Cart</h1>
            {
                ItemsInCart.map( (item) => (
                    <ItemCounter key={item.id} name={item.productNma} quantity={ item.productQuantity }/>
                )) // al pasar listas al componente siempre toca agregar un key el cual NUNCA debe ser eel index del elemento
            }

            {/* <ItemCounter name="Nintendo switch 2" quantity={ 10 }/>
            <ItemCounter name="Pro Controller" quantity={ 8 }/>
            <ItemCounter name="Super Smash" quantity={ 3 }/> */}
        </>
    )
}