import React from 'react'
import {Hero} from '../componnents/Hero/Hero';
import { Populer } from '../componnents/populer/populer';
import { O } from '../componnents/offers/O';
import { NewCollection } from '../componnents/new collections/NewCollection';
import { NewsLatter } from '../componnents/News latter/NewsLatter';

export const S = () => {
  return (
    <div>
        <Hero/>
        <Populer/>
        <O/>
        <NewCollection/>
        <NewsLatter/>
    </div>
  )
}

export default S;
