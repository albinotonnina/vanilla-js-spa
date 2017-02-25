export default {

    rootNode(){
        return document.createElement('div');
    },

    render(data) {
        const template =
            `<div class="PropertyInfo-name">${data.title}</div>
             <div class="PropertyInfo-description">${data.description}</div>
             <div class="PropertyInfo-price">
                <span itemprop="priceCurrency" content="GBP">£</span>
                <span itemprop="price" content="${data.price}">${data.price}</span>
             </div>
        `;

        const el = this.rootNode();
        el.className = 'PropertyInfo';
        el.innerHTML = template;
        return el;
    }

};
