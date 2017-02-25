import styles from './AgentComponent.scss';

export default {

    render(data) {

        const className = 'AgentComponent';

        const template =
            `<figure class="${styles[className]}-logo"><img src="${data.logoUrl}" /></figure>
            <div class="${styles[className]}-name">${data.name}</div>
            <div class="${styles[className]}-address">${data.address}</div>
            `;

        const el = document.createElement('div');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

};
