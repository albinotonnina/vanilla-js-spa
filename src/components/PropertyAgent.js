export default {

    rootNode(){
        return document.createElement('div');
    },

    render(data) {
        const template = `
      <div>${data.agentAddress}</div>
  `;

        const el = this.rootNode();
        el.className = 'PropertyItem-agent';
        el.innerHTML = template;
        return el;
    }

};
