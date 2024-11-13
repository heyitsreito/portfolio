import React from 'react';

const plans = [
  { name: 'インテンシブプラン', description: '短期集中で学びます。' },
  { name: 'ホリデープラン', description: '休日を活用したプランです。' },
];

function Plans() {
  return (
    <section id="plans">
      <h3>Plans</h3>
      <div className="plan-list">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h4>{plan.name}</h4>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Plans;
