import React, { useState, useEffect } from 'react';

const Comments = ({ sectionId }) => {
  const [comment, setComment] = useState('');
  const [commentsList, setCommentsList] = useState([]);

  // Загрузка комментариев из локального хранилища при загрузке страницы
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_${sectionId}`);
    if (storedComments) {
      setCommentsList(JSON.parse(storedComments));
    }
  }, [sectionId]); // Изменение sectionId запускает эффект

  // Функция для обработки сохранения комментария
  const handleSave = () => {
    if (comment.trim() !== '') {
      const newCommentsList = [...commentsList, comment];
      setCommentsList(newCommentsList);
      localStorage.setItem(`comments_${sectionId}`, JSON.stringify(newCommentsList)); // Сохранение комментариев в локальное хранилище с префиксом sectionId
      setComment('');
    }
  };
 
  const handleDelete =(index) => {
   const newCommentsList = commentsList.filter((_, i)=> i!==index)
   setCommentsList(newCommentsList);
   localStorage.setItem(`comments_${sectionId}`, JSON.stringify(newCommentsList))
  }

  return (
    <div>
      <input
        type="text"
        value={comment}
        placeholder='Kommentariyalarni qoldiring...'
        onChange={(e) => setComment(e.target.value)}
        style={{ width: '165px', height: '30px', margin: '20px auto', borderRadius: "5px" }}
      />
      <button onClick={handleSave}>Qo'shish</button>
     
      <ul>
        {commentsList.map((comment, index) => (
          <li key={index}>
            {comment}    {/*kommentariya chiqadi */}
            <button onClick={() => handleDelete(index)}>Ochirish</button>
            </li>
          
        ))}
      </ul>
    </div>
  );
};

export default Comments;
