
import Header from './Header.jsx';



const services = [
    { title: "UI/UX Design", description: "We create intuitive and visually appealing user experiences." },
    { title: "E-commerce Solutions", description: "Custom online stores using Shopify, WooCommerce, and more." },
    { title: "Web Development & Maintenance", description: "Developing fast, responsive websites and keeping them up-to-date." },
    { title: "CMS Integration", description: "Seamless integration with WordPress and other CMS platforms." }
];

function Services() {
    return (
        <>
            <Header />
        <div className="services-container">
            
            <h1 className="text-center services-title">Our Services</h1>
            <div className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );

}
export default Services;