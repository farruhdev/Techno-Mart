import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      icon={colorMode === 'dark' ? <SunIcon className='text-white' /> : <MoonIcon className='text-white' />}
      onClick={toggleColorMode}
      variant='ghost'
    />
  );
};

export default ColorModeToggle;
