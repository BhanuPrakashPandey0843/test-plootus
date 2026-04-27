import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { fetchBlog, fetchBlogs, fetchWordpressPostByLink } from '../../lib/blogsApi';
import styles from './BlogContent.module.css';

const BlogContent = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const load = async () => {
      try {
        let blog = await fetchBlog(slug);
        if (!blog) {
          const list = await fetchBlogs();
          blog =
            list.find(
              (b) => String(b.slug) === String(slug) || String(b.id) === String(slug)
            ) || null;
        }
        if (blog && !blog.content && blog.link) {
          const wp = await fetchWordpressPostByLink(blog.link);
          if (wp?.content) {
            blog = { ...blog, content: wp.content };
          }
        }
        setPost(blog);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog');
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

  if (error) {
    return <p className={styles.error}>Error: {error}</p>;
  }

  if (!post) {
    return <p>Blog not found.</p>;
  }

  const pageTitle = `${post?.heading || post?.title || 'Blog Post'} - Plootus Blogs`;
  const pageDesc = post?.description || post?.excerpt || 'Read this insightful blog post on Plootus about financial planning and retirement.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={`https://www.plootus.com/blogs/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        {(post?.imageUrl || post?.image) && (
          <meta property="og:image" content={post.imageUrl || post.image} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post?.heading || post?.title || '',
              "description": pageDesc,
              "image": post?.imageUrl || post?.image || '',
              "datePublished": post?.date,
              "author": {
                "@type": "Organization",
                "name": "Plootus"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Plootus",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.plootus.com/logo.png"
                }
              }
            }),
          }}
        />
      </Head>

      <div>
        <p className={styles.metadata}>
          {post?.date ? `Posted on ${format(new Date(post.date), 'MMMM d, yyyy')}` : ''}
        </p>

        <h1 className={styles.title}>{post?.heading || post?.title || ''}</h1>

        {(post?.imageUrl || post?.image) && (
          <img
            src={post.imageUrl || post.image}
            alt={post.heading || post.title}
            className={styles.featuredImage}
          />
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{
            __html: (() => {
              const raw = post?.content || post?.contentHtml || post?.html || post?.htmlData || '';
              if (typeof raw === 'string' && /<[^>]+>/.test(raw)) return raw;
              if (raw) return String(raw).replace(/\n/g, '<br />');
              return post?.excerpt || post?.description || '';
            })(),
          }}
        />
      </div>
    </>
  );
};

export default BlogContent;
