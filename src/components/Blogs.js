import React from 'react';

const blogs = [
  { title: '留学のメリット', snippet: '留学はこんなに素晴らしい...' },
  { title: 'マレーシアでの生活', snippet: '生活情報が満載...' },
];

function Blogs() {
  return (
    <section id="blogs">
      <h3>Blogs</h3>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h4>{blog.title}</h4>
            <p>{blog.snippet}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
