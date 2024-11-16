import type { FC } from 'react';

type Props = {
  article: Article;
};

const Card: FC<Props> = ({ article }) => {
  const dpr = window.devicePixelRatio || 1;
  const baseUrl = `https://images.cdn.yle.fi/image/upload/w_500,f_auto,fl_lossy,q_auto:best,dpr_${dpr}/`;
  const bgUrl =
    article.platform === 'web'
      ? `url(${baseUrl}${article.imageId}.jpg)`
      : `url(${article.imageId})`;

  return (
    <div className='my-xl gap-sm md:gap-lg flex flex-col items-center justify-center md:flex-row'>
      <a
        aria-label={article.title}
        className='w-full flex-none md:w-2/5'
        href={article.url}
        target='_blank'
      >
        <div
          className='h-0 w-full bg-stone-200 bg-cover bg-center bg-no-repeat pb-[65%]'
          style={{
            backgroundImage: bgUrl,
          }}
        />
      </a>

      <div className='w-11/12 flex-auto md:w-3/5'>
        <div className='gap-xs md:gap-sm flex flex-col items-start justify-center'>
          <p className='font-montserrat font-black text-black sm:text-lg md:text-xl'>
            <a href={article.url} target='_blank'>
              {article.title}
            </a>
          </p>
          <p className='font-montserrat text-xs font-light text-black sm:text-sm md:text-base'>{`${article.publishedDate}, ${article.publisher}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
