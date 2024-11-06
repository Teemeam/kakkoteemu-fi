import type { FC } from 'react';

type Props = {};

const Landing: FC<Props> = () => {
  return (
    <div className='relative h-lvh w-full bg-neutral-200'>
      <div className='flex h-full w-full flex-col items-start justify-center'>
        <h1 className='font-montserrat whitespace-nowrap text-9xl font-black leading-none text-black'>
          Hey,
          <br />
          I'm Teemu
        </h1>

        <p className='font-montserrat text-3xl font-light leading-tight text-black'>
          a Finnish journalist and developer
        </p>
      </div>
    </div>
  );
};

export default Landing;
