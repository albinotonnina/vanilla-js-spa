export default {

    rootNode(){
        return document.createElement('figure');
    },

    render(data) {
        const template =
            `<img src="${data.imageUrl}" />`;

        const el = this.rootNode();
        el.className = 'PropertyImage';
        el.innerHTML = template;
        return el;
    }

};
