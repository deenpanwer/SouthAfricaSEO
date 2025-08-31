import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src="/traconomics-icon.svg" alt="Traconomics Icon" width={100} height={120} />
      <Image src="/traconomics-logo.svg" alt="Traconomics Logo" width={120} height={120} style={{ marginLeft: '-50px' }} />
    </div>
  );
};

export default Logo;