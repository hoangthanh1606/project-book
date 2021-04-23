import React from 'react';
import { Row, Col, PageHeader, Descriptions, Button } from 'antd';


import ChangeAvatar from './ChangeAvatar';
import EditProfileModal from './EditProfileModal';
import CreatePasswordModal from './CreatePasswordModal';

const Profile = () => {

  return (
    <Row>
      <Col span={5}>
        <ChangeAvatar />
      </Col>
      <Col span={19}>
        <PageHeader
          className='site-page-header-responsive'
          onBack={() => window.history.back()}
          title="Thành Hoàng"
          extra={[
            <Button type='primary'>
             Transaction
            </Button>,
            <EditProfileModal />,
            <CreatePasswordModal />
          ]}
        >
          <Descriptions size='small' column={1}>
            <Descriptions.Item label='Email'>hoangthanh@gmail.com</Descriptions.Item>
            <Descriptions.Item label='Name'>Hoàng Thành</Descriptions.Item>
            <Descriptions.Item label='Phone'>0763719907</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Col>
    </Row>
  );
};

export default Profile;
