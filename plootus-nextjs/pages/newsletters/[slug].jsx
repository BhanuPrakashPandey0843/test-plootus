import { useRouter } from 'next/router';
import HubNav from '../../components/HubNav/HubNav';
import NewsletterDetails from '../../components/newsletter/NewsletterDetails';

/**
 * Dynamic route: /newsletters/[slug]
 *
 * We load the slug from the router on the client side so that we don't need
 * getStaticPaths (newsletters are dynamic CMS content).
 */
export default function NewsletterDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <HubNav />
      {/* slug may be undefined during the initial hydration render – the
          component handles that gracefully with an early-return guard */}
      <NewsletterDetails slug={slug} />
    </>
  );
}
