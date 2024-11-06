import type { FC } from 'react';

type Props = {};

const Landing: FC<Props> = () => {
  return (
    <div className='relative h-lvh w-full bg-red-900'>
      <div className='flex h-full w-full flex-col items-start justify-center'>
        <h1 className='font-montserrat text-orange text-lg font-black leading-none mix-blend-screen'>
          Hey,
          <br />
          I'm Teemu
        </h1>

        <p className='font-montserrat text-orange font-light leading-tight mix-blend-screen'>
          a Finnish programmer journalist
        </p>
      </div>
    </div>
  );
};

export default Landing;
