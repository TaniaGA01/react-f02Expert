// escribir rafc para creación automatica de componentes
import { useState } from 'react';


// Los css se importan y se ubican en el ultimo lugar de las importaciones.
// Hay dos maneras, sea importar directamente el archivo css
import './itemCounter.css';
// o en modulos
import styles from './itemCounter.module.css';

interface Props {
    name:string,
    quantity?:number
}

const ItemCounter = ({ name, quantity = 1 }: Props) => { 
    
    const [count, setCount] = useState(quantity);

    const handleAdd = () => {
        setCount(a => a + 1);
    }
    const handleSubtract = () => {
        if (count === 0) return;
        setCount(a => a - 1);
    }

    // const handleClick = () => {
    //     console.log(`Click en ${name}`)
    // }

    return (
        <section className='item-row'
            // style={{
            //     display:'flex',
            //     alignItems:'center',
            //     gap:10
            // }}
        >
            <span className={styles['item-text']}
                style={{
                    color: count === 0 ? 'red' : 'black'
                }}
            >{ name }</span>
            <button onClick={ handleAdd }>+1</button>
            <span>{ count }</span>
            <button onClick={ handleSubtract }>-1</button>
        </section>
    )
}   

export default ItemCounter
