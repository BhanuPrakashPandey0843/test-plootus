import React from 'react';
import HubNav from '../HubNav/HubNav';
import BlogHero from './BlogHero';
import AllBlogPosts from './AllBlogPosts';
import PartnersSection from '../home/PartnersSection';

const BlogsPage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', paddingBottom: '40px' }}>
      <HubNav />
      <BlogHero />
      <PartnersSection titleDisabled={true} rootPadding="0" />
      <AllBlogPosts />
    </div>
  );
};

export default BlogsPage;
