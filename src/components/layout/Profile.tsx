import { Button } from '@/components/ui/button';
import {
  MenuContent,
  MenuItem,
  MenuItemCommand,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import { Avatar } from '../ui/avatar';
import { TokenService } from '@/utils/token';
import { FaAngleDown } from 'react-icons/fa';

export const Profile = () => {
  const token = TokenService.getToken('access_token');
  const tokenDetail = TokenService.getTokenDetails(token ?? '');
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button
          variant="surface"
          size="sm"
          rounded={'xl'}
          py={6}
          color={'brand.500'}
        >
          <Avatar name={tokenDetail?.name} size={'sm'} bg={'brand.300'} />
          {tokenDetail?.name}
          <FaAngleDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="new-txt-a">
          New Text File <MenuItemCommand>⌘E</MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-file-a">
          New File... <MenuItemCommand>⌘N</MenuItemCommand>
        </MenuItem>
        <MenuItem value="new-win-a">
          New Window <MenuItemCommand>⌘⇧N</MenuItemCommand>
        </MenuItem>
        <MenuItem value="open-file-a">
          Open File... <MenuItemCommand>⌘O</MenuItemCommand>
        </MenuItem>
        <MenuItem value="export-a">
          Export <MenuItemCommand>⌘S</MenuItemCommand>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
