import Sample1 from './images1/sample1.png';
import Sample2 from './images2/sample2.png';
import './sample-images.css';
import './sample-images-copy.css';

export function addImage() {
    const img1 = document.createElement('img');
    img1.alt = 'Sample1';
    img1.src = Sample1;
    img1.classList.add('sample-image');

    const img2 = document.createElement('img');
    img2.alt = 'Sample2';
    img2.src = Sample2;
    img2.classList.add('sample-image');

    console.log(Sample1);
    console.log(Sample2);

    const body = document.querySelector('body');
    body.appendChild(img1);
    body.appendChild(img2);
}
