// HeroServices.jsx
import { Link } from 'react-router-dom';
import '../assets/css/heroServices.css';

function HeroServices() {
    const services = [
        {
            name: 'Web & App Development',
            description:
                'Custom web and mobile application development services to suit your needs.',
        },
        {
            name: 'UI × UX',
            description:
                'User-focused interface and experience design to enhance satisfaction and engagement.',
        },
    ];

    return (
        <section
            id="services"
            aria-labelledby="top-services"
            className="hero-services p-4 md:p-6 rounded-md"
        >
            <h2
                id="top-services"
                className="text-2xl font-bold mb-4 text-center text-white"
            >
                Top Services
            </h2>

            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="group rounded-xl bg-gradient-to-r from-green-500 to-sky-500 p-[1px] transition-transform duration-200"
                    >
                        <div className="rounded-xl bg-gray-950 h-full p-5 shadow hover:shadow-lg group-hover:scale-[1.01]">
                            <h3 className="text-xl font-semibold mb-2 text-center text-white">
                                {service.name}
                            </h3>
                            <p className="text-center text-gray-200/80">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
                <Link
                    to="/services"
                    className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    aria-label="View all services"
                >
                    View All Services
                </Link>
            </div>
        </section>
    );
}

export default HeroServices;
