/* global document */
import styles from "./AgentComponent.scss";

export default {

    render(data) {
        const className = 'AgentComponent';

        const template =
            `<div data-selector='AgentComponent' class='${styles[className + '-wrapper']}'>
                <figure><img src='${data.logoUrl}' /></figure>
                <div>${data.name}</div>
                <div>${data.address}</div>
                <div>${data.phone}</div>
            </div>`;

        const el = document.createElement('div');
        el.className = styles[className];
        el.innerHTML = template;
        return el;
    }

};
