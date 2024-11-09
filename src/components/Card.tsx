import type { FC } from 'react';

type Props = {
  article: Article;
};

const Card: FC<Props> = ({ article }) => {
  const dpr = window.devicePixelRatio || 1;
  const baseUrl = `https://images.cdn.yle.fi/image/upload/w_500,f_auto,fl_lossy,q_auto:best,dpr_${dpr}/`;
  const bgUrl =
    article.type === 'web' ? `url(${baseUrl}${article.image_id}.jpg)` : `url(${article.image_id})`;

  return (
    <div className='my-7 flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5'>
      <a className='w-full flex-none md:w-2/5' href={article.url} target='_blank'>
        <div
          className='h-0 w-full bg-stone-200 bg-cover bg-center bg-no-repeat pb-[65%]'
          style={{
            backgroundImage: bgUrl,
          }}
        />
      </a>

      <div className='w-11/12 flex-auto md:w-3/5'>
        <div className='flex flex-col items-start justify-center gap-1 md:gap-2'>
          <p className='font-playfair text-base font-black text-black sm:text-lg md:text-xl'>
            <a href={article.url} target='_blank'>
              {article.title}
            </a>
          </p>
          <p className='font-montserrat font-light text-black'>{`${article.published}, ${article.publisher}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
