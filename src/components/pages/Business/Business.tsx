import React from 'react';
import Feed from '@/components/Feed/Feed';
import { Box } from '@mui/material';
import SearchForm from '@/components/JobSearch/SearchForm';

interface BusinessProps {
  lng: string; 
}

const Business: React.FC<BusinessProps> = ({ lng }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        gap: '48px',
        '@media (max-width: 959px)': {
          pt: '0px',
        },
      }}
    >
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        <SearchForm lng={lng}/>
        <Feed lng={lng}/>
      </Box>
    </Box>
  );
};

export default Business;
