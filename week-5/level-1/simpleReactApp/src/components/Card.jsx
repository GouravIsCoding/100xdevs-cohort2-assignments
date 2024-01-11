import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { delCard } from '../backend';
export default function Card({
  _id,
  name = 'not found',
  description = 'not found',
  interests = ['no iterests'],
  socials = [],
}) {
  const navigate = useNavigate();
  const deleteCard = () => {
    delCard(_id).then(data => {
      console.log(data.message || data.error);
      navigate('/');
    });
  };
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left">
        <div className="mx-2 px-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Interests
            </h5>
            <ul>
              {interests.map(interest => (
                <li>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-2 my-2">
          {socials.map(social => (
            <a
              href={social.click}
              className="inline-flex items-center mx-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {social.name}
            </a>
          ))}
          <br />
          <Link to={`/edit/${_id}`}>
            <Button name={'Edit'} />
          </Link>
          <Button name={'Delete'} onClick={deleteCard} />
        </div>
      </div>
    </>
  );
}
