import { type FC, useState } from 'react';
import articles from '~/lib/articles';

type Props = {};

const Articles: FC<Props> = () => {
  const [buttonValue, setButtonValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [numberOfCards, setNumberOfCards] = useState<number>(3);

  /**
   * Prepare base image URL
   */
  const dpr = window.devicePixelRatio || 1;
  const yle_url = `https://images.cdn.yle.fi/image/upload/w_400,h_264,f_auto,fl_lossy,q_auto:best,c_fill,dpr_${dpr}/`;

  /**
   * Filter articles based on button and input values
   */
  const filterArticles = (article: Article) => {
    return (
      article.title.toLowerCase().includes(inputValue.toLowerCase()) &&
      article.role.includes(buttonValue)
    );
  };

  const filtered_articles = articles.filter(filterArticles);

  /**
   * Prepare data for rendering
   */
  const data = filtered_articles
    /**
     * Sort by date
     */
    .sort((a, b) => {
      /**
       * Split date into parts
       */
      let [a_day = '1', a_month = '1', a_year = '1970'] = a.published.split('.');
      let [b_day = '1', b_month = '1', b_year = '1970'] = b.published.split('.');

      /**
       * Add leading zeros to day and month
       */
      if (a_day.length < 2) {
        a_day = `0${a_day}`;
      }
      if (a_month.length < 2) {
        a_month = `0${a_month}`;
      }
      if (b_day.length < 2) {
        b_day = `0${b_day}`;
      }
      if (b_month.length < 2) {
        b_month = `0${b_month}`;
      }

      /**
       * Combine date parts
       */
      const a_date = `${a_year}${a_month}${a_day}`;
      const b_date = `${b_year}${b_month}${b_day}`;

      /**
       * Compare dates
       */
      return a_date < b_date ? 1 : a_date > b_date ? -1 : 0;
    })

    /**
     * Limit number of cards
     */
    .slice(0, numberOfCards)

    /**
     * Create cards
     */
    .map((article) => (
      <div className='flex justify-center items-center gap-4 md:flex-row flex-col'>
        <a className='w-full' href={article.url} target='_blank'>
          <div
            className='bg-cover bg-center bg-no-repeat md:w-96 w-full md:h-64 h-0 md:pb-0 pb-[66%]'
            style={{
              backgroundImage:
                article.type === 'web'
                  ? `url(${yle_url}${article.image_id}.jpg)`
                  : `url(${article.image_id})`,
            }}
          />
        </a>

        <div>
        <p className='font-montserrat font-black text-black text-base sm:text-lg md:text-xl'><a href={article.url} target='_blank'>
            {article.title}
          </a></p>
          <p className='font-montserrat font-light text-black'>{`${article.published}, ${article.publisher}`}</p>
        </div>
      </div>
    ));

  return (
    <div className='relative w-full'>
      <div className='relative mx-auto w-11/12'>
        {/**
         * Button header
         */}
        <div className='text-center'>
          <h2 className='my-5 font-playfair text-2xl font-black text-black sm:text-4xl md:text-4xl'>
            Recent stories
          </h2>
          <p className='my-5 font-montserrat text-lg font-light text-black sm:text-xl md:text-2xl'>
            Search by category
          </p>
        </div>

        {/**
         * Buttons
         */}
        <div className='my-5 flex w-full flex-col items-center justify-center gap-2 text-center sm:flex-row'>
          <div className='flex items-center justify-between gap-2'>
            {[
              ['All', ''],
              ['Code', 'code'],
              ['Writing', 'writing'],
            ].map(([label, value]) => (
              <button
                aria-selected={buttonValue === value}
                className='rounded-full px-5 py-2 font-montserrat font-light transition-transform hover:scale-105'
                style={{ backgroundColor: buttonValue === value ? '#fc6862' : '#ddd' }}
                onClick={() => setButtonValue(value as string)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className='flex items-center justify-between gap-2'>
            {[
              ['TV', 'https://drive.google.com/drive/folders/1iN8jvAqSwJnkTyqAggJ1copS3PbTWcHu'],
              ['Radio', 'https://drive.google.com/drive/folders/1rKNfLYwMPW8wwYPjGIDQenUsDETxSX39'],
            ].map(([label, url]) => (
              <a
                className='rounded-full bg-black px-5 py-2 font-montserrat font-light text-white transition-transform hover:scale-105'
                href={url}
                target='_blank'
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/**
         * Input header
         */}
        <div className='my-5 text-center'>
          <p className='font-montserrat text-lg font-light text-black sm:text-xl md:text-2xl'>
            or start typing
          </p>
        </div>

        {/*
         * Text input
         */}
        <div className='my-5 text-center'>
          <input
            className='w-56 border-b border-black bg-transparent pb-1 text-center font-montserrat text-lg font-light focus:outline-none sm:w-72 sm:text-xl md:text-2xl'
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
        </div>

        {/**
         * Articles
         */}
        {filtered_articles.length > 0 ? (
          <div className='my-5 max-w-md md:max-w-3xl mx-auto'>{data}</div>
        ) : (
          <p className='my-5 text-center font-montserrat text-lg font-light sm:text-xl md:text-2xl'>
            Your search did not match any stories.
          </p>
        )}

        {/**
         * Show more button
         */}
        <div className='text-center my-5'>
          {filtered_articles.length > 3 && numberOfCards < filtered_articles.length && (
            <button className='rounded-full px-5 py-2 font-montserrat font-light transition-transform hover:scale-105 bg-[#fc6862]' onClick={() => setNumberOfCards(numberOfCards + 3)}>Show more</button>
          )}

          {filtered_articles.length > 3 && numberOfCards >= filtered_articles.length && (
            <button className='rounded-full px-5 py-2 font-montserrat font-light transition-transform hover:scale-105 bg-[#fc6862]' onClick={() => setNumberOfCards(3)}>Show less</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
