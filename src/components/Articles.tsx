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
      article.form.includes(buttonValue)
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
    .map((article, i) => <Card key={`card_${i}`} article={article} />);

  return (
    <div className='relative w-full'>
      <div className='relative mx-auto w-11/12'>
        {/**
         * Button header
         */}
        <div className='my-7 text-center'>
          <h2 className='my-5 font-playfair text-3xl font-black text-black sm:text-4xl md:my-7 md:text-5xl'>
            Recent stories
          </h2>
          <p className='my-5 font-montserrat text-lg font-light text-black sm:text-xl md:my-7 md:text-2xl'>
            Search by category
          </p>
        </div>

        {/**
         * Buttons
         */}
        <div className='my-7 flex flex-wrap items-center justify-center gap-2 text-center'>
          {[
            ['All', ''],
            ['Data', 'data'],
            ['Feature', 'feature'],
            ['Game', 'game'],
          ].map(([label, value], i) => (
            <button
              key={`button_${i}`}
              aria-selected={buttonValue === value}
              className='group relative flex items-center justify-center'
              onClick={() => setButtonValue(value as string)}
            >
              <div
                className={`absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f1e039bb] to-[#b5fa94c1] blur-lg transition-opacity duration-200 ${
                  buttonValue === value ? 'opacity-100' : 'opacity-0'
                } group-hover:opacity-100`}
              />

              <p className='px-3 py-2 font-montserrat font-extrabold sm:px-5 sm:text-lg md:text-xl'>
                {label}
              </p>
            </button>
          ))}
        </div>

        {/**
         * Input header
         */}
        <div className='mb-5 mt-7 text-center'>
          <p className='font-montserrat text-lg font-light text-black sm:text-xl md:text-2xl'>
            or start typing
          </p>
        </div>

        {/*
         * Text input
         */}
        <div className='mb-7 mt-5 text-center'>
          <input
            className='w-11/12 max-w-80 border-b border-black bg-transparent pb-0.5 text-center font-montserrat text-lg font-light focus:outline-none sm:text-xl md:text-2xl'
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
            <p className='text-center font-montserrat text-lg font-light sm:text-xl md:text-2xl'>
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
              <div className='absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f1e039bb] to-[#b5fa94c1] blur-lg' />

              <p className='px-5 py-2 font-montserrat font-extrabold sm:text-lg md:text-xl'>
                Show more
              </p>
            </button>
          )}

          {filtered_articles.length > 3 && numberOfCards >= filtered_articles.length && (
            <button
              className='relative flex items-center justify-center'
              onClick={() => setNumberOfCards(3)}
            >
              <div className='absolute -z-10 h-1/2 w-9/12 bg-gradient-to-b from-[#f1e039bb] to-[#b5fa94c1] blur-lg' />

              <p className='px-5 py-2 font-playfair font-black sm:text-lg md:text-xl'>Show less</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
