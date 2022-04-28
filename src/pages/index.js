import { createClient } from 'contentful';
import Card from '../components/card/card';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'article' });

  return {
    props: {
      articles: res.items
    }
  };
};

export default function Articles({ articles }) {
  return (
    <div className="layout__article__grid">
      {articles.map(article => (
        <Card key={article.sys.id} article={article} />
      ))}
    </div>
  );
};
