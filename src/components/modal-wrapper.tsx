import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";

interface ModalWrapperProps {
  open: boolean;
  onClose: (open: boolean) => void;
  title?: string;
  width?: string;
  description?: string;
  children: React.ReactNode;
}

export const ModalWrapper = ({
  open,
  onClose,
  title,
  width,
  description,
  children,
}: ModalWrapperProps) => {
  const isDesktop: boolean = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className={`${width} sm:max-w-[600px] bg-bodyColor`}>
          <DialogHeader className="bg-bodyColor">
            <DialogTitle className="text-designColor text-center">{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="bg-bodyColor">
        <DrawerHeader className="text-left bg-bodyColor">
          <DrawerTitle className="text-designColor text-center">{title}</DrawerTitle>
          <Separator className="my-2 bg-gray-700" />
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div className="-mt-5">{children}</div>
      </DrawerContent>
    </Drawer>
  );
};
