export default {

    rootNode(){
        return document.createElement('div');
    },

    render(data) {
        const template = `
      <div class="PropertyItem-name">${data.title}</div>
      <div class="PropertyItem-description">${data.description}</div>
      <div class="PropertyItem-price">${data.price}</div>
  `;

        const el = this.rootNode();
        el.className = 'PropertyItem-info';
        el.innerHTML = template;
        return el;
    }

};
