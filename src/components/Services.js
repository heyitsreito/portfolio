import React from 'react';

const services = [
  { name: 'カウンセリング', description: '相談に応じます。' },
  { name: 'ビザ申請', description: 'ビザ取得をサポートします。' },
  // 他のサービスを追加
];

function Services() {
  return (
    <section id="services">
      <h3>Our Services</h3>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.name}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
