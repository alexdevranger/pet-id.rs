import React from 'react';
import Empty from '../../../assets/blog/4.png'
import './styles.css';

const EmptyList = () => (
  <div className='emptyList-wrap'>
    <img src={Empty} alt='empty' />
  </div>
);

export default EmptyList;