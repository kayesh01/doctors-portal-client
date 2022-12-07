import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'If you suspect you have a cavity, brushing more wont solve the problem. Only a dental filling can protect your tooth from further damage. The next thing you need to do is relax. Having a cavity filled is a quick and painless process and will help you maintain great oral health',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'The answer is no. While there may sometimes be side effects, whitening treatment is safe on tooth enamel. The process of tooth whitening is essentially the tooth will become dehydrated, meaning dried out',
            img: whitening
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services.</h3>
                <h2 className='text-3xl'>Services We Provide.</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;