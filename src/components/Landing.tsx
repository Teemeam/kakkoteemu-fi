import type { FC } from 'react';

type Props = {
  bgColor: string;
};

const Landing: FC<Props> = ({ bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className='w-full h-lvh'>
      <div className='inner-landing-wrapper'>
        <h1 className='landing-title'>Hey,</h1>
        <h1 className='landing-title'>I'm Teemu</h1>
        <h2 className='landing-description'>a Finnish programmer journalist</h2>
      </div>
    </div>
  );
};

export default Landing;
