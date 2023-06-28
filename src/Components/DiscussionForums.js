import React, { useState } from 'react';
import './DiscussionForums.css';

const DiscussionForumPage = () => {
  const [topics, setTopics] = useState([]);
  const [newTopic, setNewTopic] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [editingTopic, setEditingTopic] = useState(null);
  const [editedTopic, setEditedTopic] = useState('');

  // Handle the submission of a new topic
  const handleNewTopicSubmit = (e) => {
    e.preventDefault();
    if (newTopic.trim() === '') return;

    const newTopicObject = {
      _id: Date.now().toString(), // Generate a unique ID for the topic
      title: newTopic,
    };

    setTopics([...topics, newTopicObject]);
    setComments({ ...comments, [newTopicObject._id]: [] }); // Initialize comments for the new topic
    setNewTopic('');
  };

  // Handle the submission of a new comment
  const handleNewCommentSubmit = (topicId) => {
    if (newComment.trim() === '') return;

    const newCommentObject = {
      _id: Date.now().toString(), // Generate a unique ID for the comment
      text: newComment,
    };

    setComments({ ...comments, [topicId]: [...(comments[topicId] || []), newCommentObject] });
    setNewComment('');
  };

  // Handle the deletion of a topic
  const handleTopicDelete = (topicId) => {
    const updatedTopics = topics.filter((topic) => topic._id !== topicId);
    setTopics(updatedTopics);
    delete comments[topicId];
    setComments({ ...comments });
  };

  // Handle editing of a topic
  const handleTopicEdit = (topicId) => {
    const topicToEdit = topics.find((topic) => topic._id === topicId);
    if (topicToEdit) {
      setEditingTopic(topicId);
      setEditedTopic(topicToEdit.title);
    }
  };

  // Handle the submission of an edited topic
  const handleTopicEditSubmit = (e) => {
    e.preventDefault();
    if (editedTopic.trim() === '') return;

    const updatedTopics = topics.map((topic) => {
      if (topic._id === editingTopic) {
        return { ...topic, title: editedTopic };
      }
      return topic;
    });

    setTopics(updatedTopics);
    setEditingTopic(null);
    setEditedTopic('');
  };

  return (
    <div className="discussion-forum-page">
      {/* New Topic Form */}
      <form className="discussion-forum-page__new-topic-form" onSubmit={handleNewTopicSubmit}>
        <input
          className="discussion-forum-page__new-topic-input"
          type="text"
          placeholder="Enter topic title"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
        />
        <button className="discussion-forum-page__new-topic-button" type="submit">
          Start Topic
        </button>
      </form>

      {/* Topics */}
      {topics.map((topic) => (
        <div className="discussion-forum-page__topic" key={topic._id}>
          {editingTopic === topic._id ? (
            <form onSubmit={handleTopicEditSubmit}>
              <input
                className="discussion-forum-page__topic-edit-input"
                type="text"
                value={editedTopic}
                onChange={(e) => setEditedTopic(e.target.value)}
              />
              <button type="submit">Save</button>
            </form>
          ) : (
            <>
              <h3 className="discussion-forum-page__topic-title">{topic.title}</h3>
              <button onClick={() => handleTopicDelete(topic._id)}>Delete</button>
              <button onClick={() => handleTopicEdit(topic._id)}>Edit</button>
            </>
          )}

          {/* New Comment Form */}
          <form
            className="discussion-forum-page__new-comment-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleNewCommentSubmit(topic._id);
            }}
          >
            <input
              className="discussion-forum-page__new-comment-input"
              type="text"
              placeholder="Enter your comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="discussion-forum-page__new-comment-button" type="submit">
              Add Comment
            </button>
          </form>

          {/* Comments */}
          {comments[topic._id] &&
            comments[topic._id].map((comment) => (
              <div className="discussion-forum-page__comment" key={comment._id}>
                <p className="discussion-forum-page__comment-text">{comment.text}</p>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default DiscussionForumPage;
