import React, { useState, useEffect, useRef } from 'react';
import { fetchBlogs } from '../../lib/blogsApi';
import BlogSearch from './BlogSearch';
import BlogCard from './BlogCard';
import BlogPagination from './BlogPagination';
import styles from './AllBlogPosts.module.css';

const AllBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const sectionRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const posts = await fetchBlogs();
        const formatted = posts.map((b) => ({
          id: b.id,
          slug: b.slug || String(b.id),
          title: b.title,
          excerpt: b.excerpt?.length
            ? b.excerpt
            : (b.description || '').slice(0, 150) +
              ((b.description || '').length > 150 ? '...' : ''),
          image: b.image || b.imageUrl || '/placeholder.png',
          date: b.date || new Date().toISOString(),
          link: b.link || null,
        }));
        setBlogPosts(formatted);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };
    load();
  }, []);

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  if (loading) {
    return (
      <div className={styles.root}>
        <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <h2 className={styles.title}>All Blog Posts</h2>
          <div className={styles.loaderContainer}>
            <div className={styles.spinner}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root} ref={sectionRef}>
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Search Bar */}
        <BlogSearch searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Blog Grid */}
        <div className={styles.gridContainer}>
          {currentPosts.map((post) => (
            <div key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredPosts.length > postsPerPage && (
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              requestAnimationFrame(() => {
                const el = sectionRef.current;
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'auto' });
                }
              });
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AllBlogPosts;
