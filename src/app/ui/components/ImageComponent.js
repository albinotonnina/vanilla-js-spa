import styles from './ImageComponent.scss';

export default {

    render(data) {

        const className = 'ImageComponent';

        const template = `<img class="${styles[className + '-image']}" src="${data.imageUrl}" />`;

        const el = document.createElement('figure');
        el.innerHTML = template;
        return el;
    }

};
