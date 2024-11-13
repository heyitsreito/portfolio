import React from 'react';

const universities = [
  { name: 'Taylor’s University', description: 'マレーシアの人気大学です。' },
  { name: 'Sunway University', description: '高い教育水準を誇ります。' },
  // 他の大学を追加
];

function Universities() {
  return (
    <section id="universities">
      <h3>Picked Universities</h3>
      <div className="university-list">
        {universities.map((uni, index) => (
          <div key={index} className="university-card">
            <h4>{uni.name}</h4>
            <p>{uni.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Universities;
