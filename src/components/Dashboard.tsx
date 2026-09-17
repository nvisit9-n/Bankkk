import React from 'react';
import { AppLayout } from './layout/AppLayout';
import { HomeScreen } from './home/HomeScreen';
import { UserProfile } from '../types';

export interface DashboardProps {
  user?: UserProfile | null;
  onLogout?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return <AppLayout onLogout={onLogout} />;
};

export default Dashboard;
export { HomeScreen };
