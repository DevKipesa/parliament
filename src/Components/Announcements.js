import React, { useState, useEffect } from 'react';
import './Announcements.css';

const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [newAnnouncement, setNewAnnouncement] = useState('');

  // Fetch announcements from the server on component mount
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  // Fetch announcements from the server
  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcements');
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  // Handle the submission of a new announcement
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newAnnouncement.trim() === '') return;

    const newAnnouncementObject = {
      _id: Date.now().toString(), // Generate a unique ID for the announcement
      text: newAnnouncement,
    };

    setAnnouncements([...announcements, newAnnouncementObject]);
    setNewAnnouncement('');
  };

  // Handle the deletion of an announcement
  const handleDelete = (id) => {
    setAnnouncements(announcements.filter((announcement) => announcement._id !== id));
  };

  return (
    <div className="announcement-page">
      <form className="announcement-page__form" onSubmit={handleSubmit}>
        <input
          className="announcement-page__input"
          type="text"
          placeholder="Enter new announcement"
          value={newAnnouncement}
          onChange={(e) => setNewAnnouncement(e.target.value)}
        />
        <button className="announcement-page__button" type="submit">Add Announcement</button>
      </form>
      {announcements.length > 0 ? (
        <ul className="announcement-page__list">
          {announcements.map((announcement) => (
            <li key={announcement._id} className="announcement-page__item">
              <p className="announcement-page__paragraph">{announcement.text}</p>
              <button className="announcement-page__delete-button" onClick={() => handleDelete(announcement._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="announcement-page__empty-message">No announcements available.</p>
      )}
    </div>
  );
};

export default AnnouncementPage;
