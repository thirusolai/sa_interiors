import React from 'react';

export const DeliveryIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <rect x="20" y="30" width="60" height="50" rx="4" stroke="#333" strokeWidth="2" fill="white"/>
    <rect x="20" y="30" width="60" height="15" rx="2" fill="#E57373"/>
    <text x="30" y="65" fill="#5C6BC0" fontSize="24" fontWeight="bold" fontFamily="sans-serif">40</text>
    <path d="M30 25V35M70 25V35" stroke="#333" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const CostsIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M10 50C10 50 25 25 50 25C75 25 90 50 90 50C90 50 75 75 50 75C25 75 10 50 10 50Z" stroke="#333" strokeWidth="2" fill="white"/>
    <circle cx="50" cy="50" r="18" fill="#E57373"/>
    <text x="42" y="58" fill="white" fontSize="20" fontWeight="bold" fontFamily="serif">₹</text>
  </svg>
);

export const WarrantyIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M50 15L60 25H75V40L85 50L75 60V75H60L50 85L40 75H25V60L15 50L25 40V25H40L50 15Z" stroke="#333" strokeWidth="2" fill="white"/>
    <circle cx="50" cy="50" r="12" stroke="#5C6BC0" strokeWidth="2"/>
    <text x="40" y="56" fill="#5C6BC0" fontSize="16" fontWeight="bold" fontFamily="sans-serif">10</text>
    <path d="M40 75L30 90L50 82L70 90L60 75" fill="#E57373" stroke="#333" strokeWidth="1"/>
  </svg>
);

export const EMIIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <rect x="25" y="25" width="50" height="60" rx="4" stroke="#333" strokeWidth="2" fill="white"/>
    <rect x="35" y="35" width="30" height="10" fill="#E3F2FD" stroke="#333" strokeWidth="1"/>
    <circle cx="70" cy="70" r="15" fill="#FFF" stroke="#333" strokeWidth="2"/>
    <text x="63" y="77" fill="#E57373" fontSize="20" fontWeight="bold" fontFamily="sans-serif">%</text>
    <path d="M35 55H45M55 55H65M35 65H45M35 75H45" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const MDFIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M50 20C30 20 15 40 15 60C15 80 50 90 50 90C50 90 85 80 85 60C85 40 70 20 50 20Z" fill="#A5D6A7" stroke="#333" strokeWidth="2"/>
    <path d="M50 20V90" stroke="#333" strokeWidth="2" opacity="0.3"/>
    <path d="M50 40L30 55M50 55L70 70M50 70L30 85" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const EstimateIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <circle cx="50" cy="50" r="35" fill="#FFF" stroke="#333" strokeWidth="2"/>
    <path d="M50 25V50L65 60" stroke="#E57373" strokeWidth="3" strokeLinecap="round"/>
    <rect x="55" y="55" width="25" height="25" rx="3" fill="#E3F2FD" stroke="#333" strokeWidth="1"/>
    <text x="60" y="73" fill="#5C6BC0" fontSize="12" fontWeight="bold">72h</text>
  </svg>
);

export const DesignerIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <circle cx="50" cy="35" r="15" fill="#FFCCBC" stroke="#333" strokeWidth="2"/>
    <path d="M25 80C25 65 35 55 50 55C65 55 75 65 75 80" fill="#FFF" stroke="#333" strokeWidth="2"/>
    <path d="M70 20L85 35L45 75L30 75L30 60L70 20Z" fill="#E57373" stroke="#333" strokeWidth="1"/>
  </svg>
);

export const DesignIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M20 20H80V80H20V20Z" fill="white" stroke="#333" strokeWidth="2"/>
    <path d="M20 50H80M50 20V80" stroke="#5C6BC0" strokeWidth="1" strokeDasharray="4 4"/>
    <circle cx="50" cy="50" r="20" stroke="#E57373" strokeWidth="2"/>
    <path d="M35 35L65 65M65 35L35 65" stroke="#333" strokeWidth="1" opacity="0.5"/>
  </svg>
);

export const ConsultIcon = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M20 30H80V70H50L35 85V70H20V30Z" fill="white" stroke="#333" strokeWidth="2"/>
    <circle cx="50" cy="50" r="10" fill="#FFE082" stroke="#333" strokeWidth="1"/>
    <path d="M45 50L55 50M50 45L50 55" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    <text x="58" y="45" fill="#E57373" fontSize="12" fontWeight="bold">24h</text>
  </svg>
);
