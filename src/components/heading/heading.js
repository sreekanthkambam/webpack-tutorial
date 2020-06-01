export class Heading {

    render(title) {
        const h1 = document.createElement('h1');
        h1.innerHTML = title;
        const body = document.querySelector('body');
        body.appendChild(h1);
    }

}
