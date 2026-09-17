import React from 'react';
import { StudentProfileModal, StudentProfileModalProps } from './StudentProfileModal';

export const ProfileModal: React.FC<StudentProfileModalProps> = (props) => {
  return <StudentProfileModal {...props} />;
};

export default ProfileModal;
