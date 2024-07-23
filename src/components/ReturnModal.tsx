import ReactModal from 'react-modal';

type ReturnModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  cancelLabel?: string;
  confirmLabel?: string;
}

export default function ReturnModal(props: ReturnModalProps) {
  return (
    <ReactModal
      isOpen={props.isOpen}
      onRequestClose={props.onCancel}
      contentLabel="Return Modal"
      ariaHideApp={false}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <div>
        <h1>Are you sure you want to return?</h1>
        <button onClick={props.onCancel}>{props.cancelLabel}</button>
        <button onClick={props.onConfirm}>{props.confirmLabel}</button>
      </div>
    </ReactModal>
  )
}