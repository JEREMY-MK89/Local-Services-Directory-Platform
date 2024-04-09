import React, { useState, useEffect } from 'react';

const ReviewForm = ({ serviceId }) => {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/services/${serviceId}/reviews`)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [serviceId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/services/${serviceId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          comment,
          user_id: userId // Include user_id in the request body
        }),
      });
      if (response.ok) {
        // Review submitted successfully
        // You may want to refresh the page or update the list of reviews
        setRating('');
        setComment('');
        setUserId('');
        window.alert('Review submitted successfully!');
        // Refresh the list of reviews
        fetch(`/services/${serviceId}/reviews`)
          .then(response => response.json())
          .then(data => setReviews(data))
          .catch(error => console.error('Error fetching reviews:', error));
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/services/${serviceId}/reviews/${reviewId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the deleted review from the list
        setReviews(reviews.filter(review => review.id !== reviewId));
        window.alert('Review deleted successfully!');
      } else {
        console.error('Failed to delete review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-20">
      <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="flex mb-4">
          <div className="w-1/3">
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-2/3 ml-4">
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-1/3">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="w-2/3 ml-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit Review
            </button>
          </div>
        </div>
      </form>

      {/* Display reviews in table format */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Comment</th>
              <th className="px-4 py-2">User ID</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map(review => (
              <tr key={review.id}>
                <td className="border px-4 py-2">{review.rating}</td>
                <td className="border px-4 py-2">{review.comment}</td>
                <td className="border px-4 py-2">{review.user_id}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleDeleteReview(review.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewForm;
