import PropertyItemModel from './ItemModel';


export default {

    Create(data = []) {
        return Object.assign(Object.create({data}), {}, this.methods);
    },

    methods: {

        models: [],

        search(query){

           return fetch('/api/search/' + query)
                .then(function (response) {
                    return response.json();
                })
                .then(response => {
                    this.populate(response);
                    return this.models;
                })
                .catch(function (ex) {
                    console.log('parsing failed', ex);
                });

        },

        populate(data){
            if(data.result_count > 0){
                for (const listing of data.listing) {
                    this.add(listing);
                }
            }
        },

        add(data){

            const models = this.models;

            this.models = [...models, PropertyItemModel.Model(data)];

        }
    }

};
