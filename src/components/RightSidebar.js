import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <div className="friend-suggestions">
        <h3>Friend Suggestions</h3>
        <ul>
          <li>Julia Smith</li>
          <li>Vermillion D. Gray</li>
          <li>Mai Senpai</li>
          <li>Azunyan U. Wu</li>
          <li>Oarack Babama</li>
        </ul>
      </div>
      <div className="profile-activity">
        <h3>Profile Activity</h3>
        <p>+1,158 Followers</p>
        <p>23% vs last month</p>
      </div>
      <div className="upcoming-events">
        <h3>Upcoming Events</h3>
        <p>Friend's Birthday</p>
        <p>Jun 25, 2028</p>
      </div>
    </aside>
  );
};

export default RightSidebar;
