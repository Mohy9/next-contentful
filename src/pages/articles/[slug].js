import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createClient } from 'contentful';
import Image from 'next/image';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// method is rendering rich text files with images
// https://dev.to/luke9kim8/using-documenttoreactcomponents-with-options-36a4
const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return (<Image
        src={`https:${node.data.target.fields.file.url}`}
        height={node.data.target.fields.file.details.image.height}
        width={node.data.target.fields.file.details.image.width}
      />);
    }
  }
};

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'article'
  });

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'article',
    'fields.slug': params.slug
  });

  return {
    props: { article: items[0] }
  };
};

export default function ArticleDetails({ article }) {
  const { mainImage, title, content, industry, perex, dateOfPublication } = article.fields;

  return (
    <article>
      <section className="article-page">
        <p className="article-page__date">{dateOfPublication}</p>
        <h2 className="article-page__headline">{title}</h2>
        <ul>
          {industry.map(item => (
            <li className="article-page__tag" key={item.sys.id}>{item.fields.value}</li>
          ))}
        </ul>
        <p>{perex}</p>
        <Image
          src={`https:${mainImage.fields.file.url}`}
          width={mainImage.fields.file.details.image.width}
          height={mainImage.fields.file.details.image.height}
        />
      </section>

      <section>
        <div>{documentToReactComponents(content, renderOption)}</div>
      </section>
    </article>
  );
};
