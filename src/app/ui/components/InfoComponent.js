import styles from './InfoComponent.scss';

export default {

    render(data) {
        const className = 'InfoComponent';

        const template =
            `<div class="${styles[className+'-name']}">${data.title}</div>
             <div class="${styles[className+'-price']}">
                <span itemprop="priceCurrency" content="GBP">£</span>
                <span itemprop="price" content="${data.price}">${data.price}</span>
             </div>
             <div class="${styles[className+'-description']}">${data.description}</div>
        `;

        const el = document.createElement('div');
        el.className = styles[className];
        el.innerHTML = template;
        el.setAttribute('data-selector', 'InfoComponent');
        return el;
    }

};
