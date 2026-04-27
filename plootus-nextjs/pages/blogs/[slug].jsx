import { useRouter } from 'next/router';
import BlogDetails from '../../components/blogs/BlogDetails';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  return <BlogDetails slug={slug} />;
}
