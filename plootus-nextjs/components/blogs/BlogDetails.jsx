import React from 'react';
import HubNav from '../HubNav/HubNav';
import BlogContent from './BlogContent';
import RecentPosts from './RecentPosts';

const BlogDetails = ({ slug }) => {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <HubNav />
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>
        <div className="blog-details-grid">
          <style jsx>{`
            .blog-details-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 48px;
            }
            @media (min-width: 960px) {
              .blog-details-grid {
                grid-template-columns: 10fr 2fr;
              }
            }
          `}</style>
          
          <main>
            <BlogContent slug={slug} />
          </main>
          
          <aside>
            <RecentPosts />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
