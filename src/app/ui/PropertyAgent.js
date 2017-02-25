export default {

    rootNode(){
        return document.createElement('div');
    },

    render(data) {
        const template =
            `<figure class="PropertyAgent-logo"><img src="${data.logoUrl}" /></figure>
            <div class="PropertyAgent-name">${data.name}</div>
            <div class="PropertyAgent-address">${data.address}</div>
            `;

        const el = this.rootNode();
        el.className = 'PropertyAgent';
        el.innerHTML = template;
        return el;
    }

};
