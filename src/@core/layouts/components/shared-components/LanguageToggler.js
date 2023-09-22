import React from 'react';
import IconButton from '@mui/material/IconButton';

// ** Icons Imports
import AlphaEBox from 'mdi-material-ui/AlphaEBox';
import AlphaSBox from 'mdi-material-ui/AlphaSBox';

const LanguageToggler = props => {
  // ** Props
  const { settings, saveSettings } = props;

  const handleLanguageChange = language => {
    saveSettings({ ...settings, language });
  };

  const handleLanguageToggle = () => {
    if (settings.language === 'english') {
      handleLanguageChange('spanish');
    } else {
      handleLanguageChange('english');
    }
  };

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleLanguageToggle}>
      {settings.language === 'english' ? <AlphaSBox /> : <AlphaEBox />}
    </IconButton>
  );
};

export default LanguageToggler;
