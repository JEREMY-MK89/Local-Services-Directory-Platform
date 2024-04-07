import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-sm font-bold mb-8">Our Service Range</h1>
      <p className="text-lg text-gray-600">We offer a wide range of services to cater to your needs. From legal advice to plumbing services, from filling stations to cleaning services, and from banking to transportation, we have it all covered. Our dedicated team strives to provide top-notch service and ensure customer satisfaction.</p>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1062933252/photo/legal-advice-service-concept-with-lawyer-working-for-justice-law-business-legislation-and.jpg?s=612x612&w=0&k=20&c=KUbSd05rSSgbPNfRoogdaiGYkExurmDUJMpXQ7d5OlM=" alt="Legal Advice" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">LEGAL</p>
        </div>
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1372971614/photo/petrol-gas-station-at-night-with-city-building.jpg?s=612x612&w=0&k=20&c=AV2jGhWoazaXHZoIn5Tz8kUp2aZGGUQlAIRaUqeog_w=" alt="Legal Services" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">Filling stations</p>
        </div>
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1204813771/photo/male-worker-inspecting-valve.jpg?s=612x612&w=0&k=20&c=XgMP7OHBCiQMmQ6D3F_qfjZfEqmwRspnAiDcFrHILOA=" alt="Worker Inspecting Valve" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">Plumbing</p>
        </div>
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1422277971/video/happy-latin-american-woman-leading-a-group-of-professional-cleaners-holding-a-basket-of.jpg?s=640x640&k=20&c=BiVbTFZyavUVFlXYMC191o6m7sFPpG1Xk8FZ-RDtctE=" alt="Happy Woman Leading Cleaners" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">Cleaning</p>
        </div>
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1298283535/video/time-lapse-low-angle-of-tall-corporate-buildings-skyscraper.jpg?s=640x640&k=20&c=JbUNwtSzLXArsSZ3FcoiwHf6ggjOy_UTJ1i4V2BWBeg=" alt="Airplane Cabin Interior" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">Banking</p>
        </div>
        <div className="relative">
          <img src="https://media.istockphoto.com/id/1371801392/video/emerging-connection-lines-over-skyscrapers-5g-data-transfer-finance-and-economy-night-version.jpg?s=640x640&k=20&c=oyO1fxcnsEwXTpkDJGZDSpF8wUeX2ZBwXC3rN5j6oiU=" alt="Luxury Car Interior" loading="lazy" />
          <p className="absolute bottom-0 left-0 bg-black text-white px-2 py-1">Transportation</p>
        </div>
      </div>
    </div>
  );
};

export default About;
