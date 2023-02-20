import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    cover,
    category,
    id
  },
}) => {
  return (
    <div className='blogItem-wrap'>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <img className='blogItem-cover' src={cover} alt='cover' />
      </Link>
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogItem-desc truncate'>{description}</p>
      <footer>
        <div className='blogItem-author'>
          <div>
            <p>{createdAt}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogItem;