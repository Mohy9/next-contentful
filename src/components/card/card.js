import Link from 'next/link';
import Image from 'next/image';

export default function Card({ article }) {
  const { title, slug, dateOfPublication, mainImage, industry, topic } = article.fields;

  return (
    <article className="card">
      <section>
        <Image
          src={`https:${mainImage.fields.file.url}`}
          width={mainImage.fields.file.details.image.width}
          height={mainImage.fields.file.details.image.height}
        />
      </section>

      <section className="card__content">
        <div className="card__content__info">
          <Link href={`/articles/${slug}`}>
            <h4>{title}</h4>
          </Link>

          <ul>
            {industry.map(item => (
              <li className="card__content__tag" key={item.sys.id}>{item.fields.value}</li>
            ))}
          </ul>

          <p className="card__content__date">{dateOfPublication}</p>
          <p className="card__content__topic">#{topic.fields.value}</p>
        </div>

        <div className="card__content__cta">
          <Link href={`/articles/${slug}`}>
            <a>číst</a>
          </Link>
        </div>
      </section>
    </article>
  );
};
