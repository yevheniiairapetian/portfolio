import React, { useState, useEffect } from 'react';

export const NewVisitorModal = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check if the user has seen the modal before
    const popStatus = localStorage.getItem('pop_status');
    if (!popStatus) {
      setVisible(true); // Show the modal
      localStorage.setItem('pop_status', 'seen'); // Mark as seen
    }
  }, []);

  if (!visible) return null; // Don't render if not visible

  return (
    <div className="popup favorite-modal pt-3 w-100">
       
      
     
      <p className="whats-new-info text-center">What's new: the app moved to React.js, is now localized, and has a theme toggler. Read more <a className="whats-new-link" href="https://yevheniiairapetian.com/#/portfolio-case">here</a></p>
      
      <button className="light-modal-button got-it-button new-visitor-button pl-1 pb-1 pt-1 pr-1" onClick={() => setVisible(false)}>x</button>
    </div>
  );
}