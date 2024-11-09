import { type FC, useState } from 'react';
import articles from '~/lib/articles';
import Card from './Card';

type Props = {};

const Articles: FC<Props> = () => {
  const [buttonValue, setButtonValue] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const [numberOfCards, setNumberOfCards] = useState<number>(3);

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
    .map((article) => <Card article={article} />);

  return (
    <div className='relative w-full'>
      <div className='relative mx-auto w-11/12'>
        {/**
         * Button header
         */}
        <div className='my-7 text-center'>
          <h2 className='my-5 font-playfair text-2xl font-black text-black sm:text-4xl md:text-4xl'>
            Recent stories
          </h2>
          <p className='my-5 font-montserrat text-base font-light text-black sm:text-lg md:text-xl'>
            Search by category
          </p>
        </div>

        {/**
         * Buttons
         */}
        <div className='my-7 flex w-full flex-col items-center justify-center gap-2 text-center sm:flex-row'>
          <div className='flex items-center justify-between gap-2'>
            {[
              ['All', ''],
              ['Code', 'code'],
              ['Writing', 'writing'],
            ].map(([label, value]) => (
              <button
                aria-selected={buttonValue === value}
                className='group relative flex items-center justify-center'
                onClick={() => setButtonValue(value as string)}
              >
                <div
                  className={`absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f13995bb] to-[#faa894c1] blur-lg transition-opacity duration-200 ${
                    buttonValue === value ? 'opacity-100' : 'opacity-0'
                  } group-hover:opacity-100`}
                />

                <p className='px-5 py-2 font-playfair font-black'>{label}</p>
              </button>
            ))}
          </div>

          <div className='flex items-center justify-between gap-2'>
            {[
              ['TV', 'https://drive.google.com/drive/folders/1iN8jvAqSwJnkTyqAggJ1copS3PbTWcHu'],
              ['Radio', 'https://drive.google.com/drive/folders/1rKNfLYwMPW8wwYPjGIDQenUsDETxSX39'],
            ].map(([label, url]) => (
              <a
                className='group relative flex items-center justify-center'
                href={url}
                target='_blank'
              >
                <div className='blur- absolute -z-10 h-1/2 w-9/12 bg-stone-300 blur-lg transition-colors duration-200 group-hover:bg-stone-400' />
                <p className='px-5 py-2 font-playfair font-black text-black'>
                  <span className='border-b border-black'>{label}</span>
                </p>
              </a>
            ))}
          </div>
        </div>

        {/**
         * Input header
         */}
        <div className='mb-5 mt-7 text-center'>
          <p className='font-montserrat text-base font-light text-black sm:text-lg md:text-xl'>
            or start typing
          </p>
        </div>

        {/*
         * Text input
         */}
        <div className='mb-7 mt-5 text-center'>
          <input
            className='w-11/12 max-w-80 border-b border-black bg-transparent pb-0.5 text-center font-montserrat text-base font-light focus:outline-none sm:text-lg md:text-xl'
            value={inputValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          />
        </div>

        {/**
         * Articles
         */}
        <div className='mx-auto my-7 w-full max-w-md md:max-w-3xl'>
          {filtered_articles.length > 0 ? (
            data
          ) : (
            <p className='text-center font-montserrat text-base font-light sm:text-lg md:text-xl'>
              Your search did not match any stories.
            </p>
          )}
        </div>

        {/**
         * Show more button
         */}
        <div className='my-7 flex items-center justify-center'>
          {filtered_articles.length > 3 && numberOfCards < filtered_articles.length && (
            <button
              className='relative flex items-center justify-center'
              onClick={() => setNumberOfCards(numberOfCards + 3)}
            >
              <div className='absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f13995bb] to-[#faa894c1] blur-lg' />

              <p className='px-5 py-2 font-playfair font-black'>Show more</p>
            </button>
          )}

          {filtered_articles.length > 3 && numberOfCards >= filtered_articles.length && (
            <button
              className='relative flex items-center justify-center'
              onClick={() => setNumberOfCards(3)}
            >
              <div className='absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f13995bb] to-[#faa894c1] blur-lg' />

              <p className='px-5 py-2 font-playfair font-black'>Show less</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
