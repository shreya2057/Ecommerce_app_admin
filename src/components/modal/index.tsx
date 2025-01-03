import { DialogRootProps } from '@chakra-ui/react';
import {
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';

export const DialogBox = ({
  dialogProps,
  buttonTitle,
  children,
  customButton,
  headerTitle,
  isLoading,
  onSubmit,
  onClose,
  id,
  open,
  setOpen,
}: DialogBoxProps) => {
  const onSave = async () => {
    await onSubmit();
  };
  return (
    <DialogRoot
      {...dialogProps}
      id={id}
      open={open}
      onExitComplete={onClose}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogBackdrop />
      <DialogTrigger asChild>
        {customButton ? (
          customButton
        ) : (
          <Button variant="outline">{buttonTitle}</Button>
        )}
      </DialogTrigger>
      <DialogContent>
        {headerTitle && (
          <DialogHeader bg={'brand.200'}>
            <DialogTitle color={'brand.600'}>{headerTitle}</DialogTitle>
          </DialogHeader>
        )}
        <DialogBody py={6}>{children}</DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline" color={'brand.600'}>
              Cancel
            </Button>
          </DialogActionTrigger>
          <Button
            type="button"
            variant={'solid'}
            bg={'brand.500'}
            onClick={onSave}
            _hover={{ bg: 'brand.300' }}
            loading={isLoading}
          >
            Save
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

type DialogBoxProps = {
  buttonTitle?: string;
  customButton?: React.ReactNode;
  children: React.ReactNode;
  dialogProps: Omit<DialogRootProps, 'children'>;
  headerTitle?: string;
  isLoading: boolean;
  onSubmit: () => Promise<void>;
  onClose?: () => void;
  id?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
