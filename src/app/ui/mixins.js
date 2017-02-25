export const ViewRenderer = {

    initView(className) {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        const el = document.createElement('div');
        el.className = className;
        document.body.appendChild(el);
        return el;
    }

};
