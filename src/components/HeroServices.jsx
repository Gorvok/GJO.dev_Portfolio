// HeroServices.jsx
import '../assets/css/heroServices.css';

function HeroServices() {
    const services = [
      { name: "Web & App Development", description: "Custom web and mobile application development services to suit your needs." },
      { name: "UI x UX", description: "User-focused interface and experience design to enhance user satisfaction and engagement." }
    ];
  
    return (
      <div className="hero-services p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Top Services</h2> {/* Added heading */}
        <div className="flex space-x-4"> {/* This flex container will lay out its children side by side */}
          {services.map((service, index) => (
            <div key={index} 
                 className="service p-4 bg-gray-950 rounded-lg shadow transition-shadow duration-200 flex-1 flex flex-col justify-center items-center hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500">
              <h3 className="text-xl font-semibold mb-2 text-center">{service.name}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default HeroServices;
