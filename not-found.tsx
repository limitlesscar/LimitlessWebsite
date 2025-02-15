'use client'; // This ensures that the page runs in the client side.

import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>404 - Page Not Found</h1>
      <p style={{ fontSize: '18px' }}>Sorry, the page you're looking for doesn't exist.</p>
      <Link href="/" style={{ fontSize: '18px', color: '#0070f3', textDecoration: 'underline' }}>
        Go back to home
      </Link>
    </div>
  );
};

export default NotFound;
