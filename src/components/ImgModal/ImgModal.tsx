import { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Tooltip,
} from "@material-tailwind/react";

const ImgModal: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [windowSize, setWindowSize] = useState(1280);

  useEffect(()=>{
    if(typeof window !== undefined){
        setWindowSize(window.innerWidth);
    }
  },[])

    if (windowSize > 768) {
      return (
        <>
          <Tooltip content="click to zoom">
            <button
              onClick={handleOpen}
              className="p-0 rounded-none border-none bg-transparent"
            >
              {children}
            </button>
          </Tooltip>

          <Dialog
            open={open}
            handler={handleOpen}
            className="bg-bg-color relative p-0 overflow-hidden"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: -100 },
            }}
            size="lg"
          >
            <DialogBody className="overflow-hidden rounded-lg p-0 max-w-[1280px]">
              {children}
            </DialogBody>
            <DialogFooter className="absolute top-0">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Close</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </>
      );
    }
  return (
    <>
      <Tooltip content="click to zoom">
        <button
          onClick={handleOpen}
          className="border-none bg-transparent"
        >
          {children}
        </button>
      </Tooltip>

      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-bg-color relative overflow-hidden"
        animate={{
          mount: { scale: 2.3, y: 0, rotate: 90, left: 0 },
          unmount: { scale: 1.5, y: -100, left: 0 },
        }}
        size="lg"
      >
        <DialogBody className="overflow-hidden rounded-lg p-0">
          {children}
        </DialogBody>
        <DialogFooter className="absolute -top-3  -left-1">
          <button
            onClick={handleOpen}
            className="text-[.5em] font-aero text-orange"
          >
            <span>Close X</span>
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ImgModal;
