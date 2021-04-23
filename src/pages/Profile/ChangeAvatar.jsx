import React, { Fragment,  useRef } from 'react';


const ChangeAvatar = () => {
  
  const fileInput = useRef(null);

  const onUpload = (e) => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    // changeAvatar(formData);
  };

  return (
    <Fragment>
      <input
        style={{ display: 'none' }}
        type='file'
        ref={fileInput}
        onChange={onUpload}
      />
      <img
        style={{ width: '100%', cursor: 'pointer' }}
        // src={avatarUrl}
        // alt={name}
        title='Change Avatar'
        onClick={() => fileInput.current.click()}
      />
    </Fragment>
  );
};

export default ChangeAvatar;
