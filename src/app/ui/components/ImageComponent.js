import styles from '../styles/ImageComponent.scss';

export default {

    render(data) {

        const className = 'ImageComponent';

        const template =
            `<img src="${data.imageUrl}" />`;

        const el = document.createElement('figure');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

};
