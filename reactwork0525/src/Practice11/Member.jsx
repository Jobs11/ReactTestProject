import React, { useState } from 'react';
import Profile from './Profile';

const styles = {
  wrapper: {
    width: 250,
    height: 180,
    margin: 8,
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid red',
    borderRadius: 16,
  },
  messageText: {
    color: 'blue',
    fontSize: 20,
  },
  SubmitText: {
    color: 'black',
    fontSize: 30,
  },
};

const Member = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_con, setPassword_Con] = useState('');
  const [name, setName] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleChangePassword_Con = (event) => {
    setPassword_Con(event.target.value);
  };
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    if (password === password_con) {
      alert(
        `이메일: ${email}\n비밀번호: ${password}\n비밀번호 확인: ${password_con}\n이름: ${name} `,
      );
      event.preventDefault();
    } else {
      alert(' 돌아가');
      event.preventDefault();
    }
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이메일 입력칸 ✉"
          onChange={handleChangeEmail}
          style={styles.messageText}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 입력칸 🔒"
          onChange={handleChangePassword}
          style={styles.messageText}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호 확인 입력칸 🔒"
          onChange={handleChangePassword_Con}
          style={styles.messageText}
        />
        <br />
        <input
          type="text"
          placeholder="이름 입력칸 📝"
          onChange={handleChangeName}
          style={styles.messageText}
        />
        <br />
        <br />
        <button type="submit" style={styles.SubmitText}>
          📩
        </button>
      </form>
    </div>
  );
};

export default Member;
