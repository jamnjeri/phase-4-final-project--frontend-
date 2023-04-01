import React from 'react'
import { useState } from 'react'
import ReviewList from './ReviewList';
import { FaArrowLeft } from 'react-icons/fa';

function Recipe({recipe, toggleShowComponent}) {

  const [showReviews, setShowReviews] = useState(false);

  // Show / Hide Reviews
  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };


  return (
    <div className="container mx-auto my-8 ">
      <div className="mx-auto md:max-w-4xl">
      <button className="bg-yellow-500 hover:text-white text-black font-bold py-2 px-4 rounded mt-4 rounded-full" onClick={() => toggleShowComponent()}>
        <FaArrowLeft className="inline-block mr-2 text-black hover:text-white" />
        Back
      </button>
      <div className="mt-6 md:col-span-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            className="w-full h-96 object-cover"
            src={recipe.image_url}
            alt={recipe.title}
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {recipe.title}
            </h2>
            <p className="text-gray-700 text-justify indent-8 text-lg mb-4">{recipe.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ingredients:
              </h3>
              <p>{recipe.ingredients}</p>
            </div>
            <div className='font-bold text-lg mb-2'>Tags:</div>
            {recipe.tags.length > 0 ? (<div className='text-gray-700 text-base'>{recipe.tags.map((tag) => tag.name).join(', ')}</div>) : ('No Assigned Tags')}
            {/* <div className='text-gray-700 text-base'>{recipe.tags.map((tag) => tag.name).join(', ')}</div> */}
            <div className="flex justify-between items-center">
              <p className='text-gray-700'>By: |  {recipe.user.username}</p>
              <button
                onClick={toggleReviews}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"
              >
                {showReviews ? 'Hide Reviews' : 'Show Reviews'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {showReviews && recipe.reviews.length > 0 ? (<ReviewList reviews={recipe.reviews} />) : (showReviews && <h2>No Reviews Yet</h2>)}
      </div>
      <button className='mt-8 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full'>+Add Review</button>
    </div>
  </div>
  )
}

export default Recipe