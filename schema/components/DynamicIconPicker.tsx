// components/DynamicIconPicker.tsx
import React, { useState } from 'react';
import type { StringInputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';
import { Box } from '@sanity/ui';
import * as FaIcons from 'react-icons/fa';

const DynamicIconPicker: React.FC<StringInputProps> = (props) => {
  const { value, onChange } = props;
  const [selectedIcon, setSelectedIcon] = useState<string>(value || 'FaBeer');

  const iconNames = Object.keys(FaIcons) as (keyof typeof FaIcons)[];

  const handleSelect = (name: string) => {
    setSelectedIcon(name);
    onChange(PatchEvent.from(set(name))); // sets the string value of the icon name
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        maxHeight: 200,
        overflowY: 'auto',
      }}
    >
      {iconNames.map((name) => {
        const IconComp = FaIcons[name];
        return (
          <Box
            key={name}
            onClick={() => handleSelect(name)}
            style={{
              border: name === selectedIcon ? '2px solid blue' : '1px solid #ccc',
              padding: 4,
              cursor: 'pointer',
            }}
            title={name}
          >
            <IconComp size={20} />
          </Box>
        );
      })}
    </Box>
  );
};

export default DynamicIconPicker;
