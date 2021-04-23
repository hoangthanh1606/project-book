import React, { Fragment, useState } from 'react';
import { Modal, Button } from 'antd';

// import CreatePassword from './CreatePassword';

const CreatePasswordModal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <Button type='primary' onClick={() => setVisible(true)}>
        Create Password
      </Button>
      <Modal
        title='Create Password'
        visible={visible}
        onCancel={() => setVisible(false)}
        // footer={null}
      >
        {/* <CreatePassword setVisible={setVisible} /> */}
      </Modal>
    </Fragment>
  );
};

export default CreatePasswordModal;
