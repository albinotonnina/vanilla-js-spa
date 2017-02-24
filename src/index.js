import PropertyItemFactory from './factories/PropertyItemFactory';
import PropertyItemModel from './models/PropertyItemModel';

const data = {
    num_bedrooms:"5",
    agent_address:"4-6 Station Road, New Barnet",
    property_type:"Detached house",
    description:" Built in 1949 on the site of the former Friern Barnet junior school this substantial five bedroom home sits on a large corner plot occupying approximately one third of an acre. Situated behind secure electronic gates the property which has a south west",
    agent_postcode:"EN5 1QW",
    details_url:"http://www.zoopla.co.uk/for-sale/details/39782877",
    price:"1800000",
    agent_name:"Your Move - Spencer & Sener",
    agent_logo:"http://st.zoocdn.com/zoopla_static_agent_logo_(326525).png",
    agent_phone:"020 3478 3306",
    image_url:"http://li.zoocdn.com/91062b96be923536c8505e18a132a53f684360d1_354_255.jpg"
};

const Model = PropertyItemModel.Model(data).getData();

const PropertyItem = PropertyItemFactory.Property(Model);

let PropertyItemEl = PropertyItem.render();

document.body.appendChild(PropertyItemEl);
