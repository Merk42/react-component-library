import { useRef, useEffect } from 'react';

function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (!dialogNode) return;

    if (isOpen) {
      dialogNode.showModal(); // Use show() for non-modal dialogs
    } else {
      dialogNode.close();
    }

    const handleClose = () => {
        onClose?.(); // Call onClose only if it's defined
    };
    
    dialogNode.addEventListener('close', handleClose);

    return () => {
        dialogNode.removeEventListener('close', handleClose);
    };
  }, [isOpen, onClose]);

  return (
    <dialog ref={dialogRef}>
      {children}
      <button onClick={() => dialogRef.current?.close()}>Close</button>
    </dialog>
  );
}

export default Dialog;