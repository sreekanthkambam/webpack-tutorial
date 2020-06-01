import { Heading } from './components/heading/heading';

export const helloWorld = () => {
    
    new Heading().render('Hello World');

    const body = document.querySelector('body');
    const h2 = document.createElement('h2');
    h2.innerHTML = 'Hello World Small Heading';
    body.appendChild(h2);
}

helloWorld();
