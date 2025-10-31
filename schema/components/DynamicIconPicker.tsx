// components/DynamicIconPicker.tsx
import React, { useEffect, useState } from 'react';
import type { ObjectInputProps } from 'sanity';
import { PatchEvent, set } from 'sanity';
import { Stack, Box, Text } from '@sanity/ui';
import * as FaIcons from 'react-icons/fa';

export interface IconFieldValue {
  _key?: string;
  heading: string;
  icon: keyof typeof FaIcons;
  color: string;
  size: number;
}

const DynamicIconPicker: React.FC<ObjectInputProps<Record<string, any>>> = (props) => {
  const value = props.value as IconFieldValue | undefined;

  const [heading, setHeading] = useState<string>(value?.heading ?? '');
  const [icon, setIcon] = useState<IconFieldValue['icon']>(value?.icon ?? 'FaBeer');
  const [color, setColor] = useState<string>(value?.color ?? '#000000');
  const [size, setSize] = useState<number>(value?.size ?? 24);

  useEffect(() => {
    props.onChange(
      PatchEvent.from(
        set({
          ...value,
          heading,
          icon,
          color,
          size,
        })
      )
    );
  }, [heading, icon, color, size]);

  const iconNames = Object.keys(FaIcons) as (keyof typeof FaIcons)[];

  const renderIcon = (name: keyof typeof FaIcons, color: string, size: number) => {
    const IconComp = FaIcons[name];
    if (!IconComp) return <Box style={{ width: size, height: size, background: '#eee' }} />;
    return <IconComp color={color} size={size} />;
  };

  return (
    <Stack space={3}>
      <label>
        <Text weight="semibold">Title:</Text>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.currentTarget.value)}
          style={{ width: '100%', padding: '4px', marginTop: '4px' }}
        />
      </label>

      <Text weight="semibold">Select an Icon:</Text>
      <Box style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxHeight: 200, overflowY: 'auto' }}>
        {iconNames.map((name) => {
          const IconComp = FaIcons[name];
          if (!IconComp) return null;
          return (
            <Box
              key={name}
              onClick={() => setIcon(name)}
              style={{
                border: name === icon ? '2px solid blue' : '1px solid #ccc',
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

      <Box style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <label>
          Color:&nbsp;
          <input type="color" value={color} onChange={(e) => setColor(e.currentTarget.value)} />
        </label>
        <label>
          Size:&nbsp;
          <input
            type="number"
            value={size}
            min={10}
            max={200}
            onChange={(e) => setSize(parseInt(e.currentTarget.value, 10) || 24)}
          />
        </label>
      </Box>

      <Box>
        <Text weight="semibold">Preview:</Text>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {renderIcon(icon, color, size)}
          <Text>{heading}</Text>
        </div>
      </Box>
    </Stack>
  );
};

export default DynamicIconPicker;
