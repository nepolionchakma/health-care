
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';
import "./Services.css"


const Services = () => {

    // Load Fake Data from public folder
    const { services } = useAuth();
    return (
        <div>

            {services.length === 0 ?
                <div className="d-flex justify-content-center py-5">
                    <div className="spinner-border  text-warning" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> :
                <div className="services-container row p-4 m-0">

                    {/* Map */}

                    {
                        services.map(service =>
                            <Service
                                key={service.id}
                                service={service}
                            >

                            </Service>
                        )
                    }
                </div>}
        </div>
    );
};

export default Services;