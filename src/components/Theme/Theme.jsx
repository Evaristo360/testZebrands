import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import {
  BrightnessHigh as LightModeIcon,
  Brightness4 as DarkModeIcon
} from '@mui/icons-material';
import { setItem } from '../../utils/persistentStorage';
import { useTheme } from './hooks/useTheme';

const Theme = () => {
  const { theme, availableSkins, handleChangeTheme } = useTheme();
  const { LIGHT, DARK } = availableSkins;

  const handleToggleTheme = () => {
    const selectedTheme = theme === LIGHT ? DARK : LIGHT;

    handleChangeTheme(selectedTheme);
    setItem('theme', selectedTheme);
  };

  const tooltipText = "Cambiar modo " + (theme === LIGHT ? "Oscuro" : "Claro")

  return (
    <Box mx={1}>
      <Tooltip title={tooltipText}>
        <IconButton
          edge="start"
          aria-label="change-theme"
          onClick={handleToggleTheme}
        >
          {theme === LIGHT ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export { Theme };
