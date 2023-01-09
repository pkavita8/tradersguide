import Image from 'next/image';
import React, { Suspense } from 'react'
import {fallback} from '../../assets/images'

const Slogan = () => {
  return (
    <Suspense
      fallback={
        <Image
          src={fallback}
          alt="traders guide stock market advisory"
        />
      }
    >
      <video
      width={'100%'}
        className="app-intro-gif"
        autoPlay
        loop
        muted
        poster={fallback}
      >
        <source
          src="https://video.wixstatic.com/video/705bee_b104e31548eb4664a0cc76dc46f7b565/720p/mp4/file.mp4"
          type="video/webm"
        />
      </video>
    </Suspense>
  );
};

export default Slogan;
