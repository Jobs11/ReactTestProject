import React, { useState, useRef } from 'react';
import Myimage from './lavar.png';
const styles = {
  image: {
    with: 400,
    height: 300,
    borderRadius: 25,
  },
};

const Profile = () => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      {/* 업로드 된 이미지 미리보기 */}
      <img
        src={imgFile ? imgFile : Myimage}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      {/* 이미지 업로드 input */}
      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        ref={imgRef}
      />
    </div>
  );
};

export default Profile;
