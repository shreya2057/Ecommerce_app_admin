import { useState } from 'react';
import { Switch as ChakraSwitch } from '../ui/switch';

export const Switch = ({
  value,
  onChange,
  isDisabled,
}: {
  value: boolean;
  onChange: (e: boolean) => void;
  isDisabled?: boolean;
}) => {
  const [checked, setChecked] = useState(value);
  return (
    <ChakraSwitch
      checked={checked}
      onCheckedChange={(e) => {
        setChecked(e?.checked);
        onChange(e?.checked);
      }}
      disabled={isDisabled}
      colorPalette={'brand'}
      variant={'raised'}
    />
  );
};
