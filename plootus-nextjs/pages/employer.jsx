import React from 'react';
import StaticEmployer from '../components/employer/StaticEmployer';

export default function EmployerPage() {
  return <StaticEmployer />;
}

// Disable the default layout to avoid double navigation bars
EmployerPage.layout = 'none';
