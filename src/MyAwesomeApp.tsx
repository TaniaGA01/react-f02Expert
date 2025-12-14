import type { CSSProperties } from "react";

const 
    firstName = 'Tania',
    lastName = 'Gaitan',
    favoriteGames = ['lola', 'jtj', 'ss'],
    isActive = true,
    address = {
        zipCode: '123',
        city: 'NY',
        country: 'USA'
    },
    myStyles:CSSProperties = {
        backgroundColor: 'red',
        padding: 10,
        borderRadius:10
    }
;

export const MyAwesomeApp = () => {
    return (
        <>
        <h2>{ firstName }</h2>
        <h3>{ lastName }</h3>
        <p>{ favoriteGames.join(', ')}</p>
        <p>{ 2 + 2 }</p>
        <h1>{ isActive ? 'Hola' : 'Adios'}</h1>
        <p>{ JSON.stringify(address) }</p>
        <h3 style={ myStyles }>{ address.zipCode }</h3>
        </>
    )
}