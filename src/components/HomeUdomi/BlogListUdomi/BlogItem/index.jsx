import React from 'react';
import { Link } from 'react-router-dom';
import ChipUdomi from '../../../commonUdomi/ChipUdomi';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    ime,
    title,
    createdAt,
    cover,
    category,
    id
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`/udomi/${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
      </Link>
      <div className='flex items-center justify-between mb-3'>
        <h1 className='text-2xl'>{ime}</h1>
        <h2>{title}</h2>
      <ChipUdomi label={category} />
      </div>
      <p className='blogItem-desc'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <h2>{createdAt}</h2>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;