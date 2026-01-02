// Test en componentes de React
// para hacer un test de un componente de React (o otro framework) se debe instalar la dependencia Testing Library ya que permite hacer tests en archivos .tsx.
// https://testing-library.com/docs/react-testing-library/intro
// Atención a las modificaciones hechas en el archivo vite.config.ts
// npm run test


import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react'; 
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
    test('should render firstname', () => {
        const { container } = render(<MyAwesomeApp/>);
        const titleH2 = container.querySelector('h2');
        expect(titleH2?.innerHTML).toContain('Tania')
    });

    test('should render firstname - screen', () => {
        render(<MyAwesomeApp/>);
        //screen.debug(); // muestra en consola el html del componente de manera organizada

        const titleH2 = screen.getByRole('heading', {
            level : 2
        });
        expect(titleH2?.innerHTML).toContain('Tania')
    });
    
    test('should render firstname - screen 2', () => {
        render(<MyAwesomeApp/>);
        screen.debug(); // muestra en consola el html del componente de manera organizada, muy conveniente para haceer todo tipo de test, sobretodo tests de eventos

        const titleH2 = screen.getByTestId('first-name-title'); // lo más optimo es de NO usar data attributes en testing
        expect(titleH2?.innerHTML).toContain('Tania');
    });

    // SNAPSHOT : es una fotografia del renderizado del html inicial para después compararla con la versión actual via test (ver acá abajo). La funcion toMatchSnapshot() crea el folfder __snapshots__ el cual contiene los snapshots iniciales que serán comparados con los des las pruebas. Si se necesita actualizar el snapshot hay que hacer click en la tecla 'u'

    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp/>);
        expect(container).toMatchSnapshot();
    });
})