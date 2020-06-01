import Sample1 from './images1/sample1.png';
import Sample2 from './images2/sample2.png';
import './sample-images.css';
import './sample-images-copy.css';
import { Heading } from './components/heading/heading';

export function addImage() {
    const body = document.querySelector('body');

    const img1 = document.createElement('img');
    img1.alt = 'Sample1';
    img1.src = Sample1;
    img1.classList.add('sample-image');

    const img2 = document.createElement('img');
    img2.alt = 'Sample2';
    img2.src = Sample2;
    img2.classList.add('sample-image');

    new Heading().render('Add Image Primary Heading');
    body.appendChild(img1);
    body.appendChild(img2);
    
}

addImage();
