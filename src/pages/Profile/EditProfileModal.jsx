import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'antd';

// import EditProfile from './EditProfile';

const EditProfileModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <Button type='primary' onClick={() => setVisible(true)}>
        Edit Profile
      </Button>
      <Modal
        title='Edit Profile'
        visible={visible}
        onCancel={() => setVisible(false)}
        // footer={null}
      >
        {/* <EditProfile setVisible={setVisible} /> */}
      </Modal>
    </Fragment>
  );
};

export default EditProfileModal;
