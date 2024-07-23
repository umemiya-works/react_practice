import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Draggable(props : Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform
  } = useDraggable({
    id: props.id,
  });

  const transformStyle = {
    transform : CSS.Transform.toString(transform)
  };

  return (
    <button
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={transformStyle}
    >
      {props.children}
    </button>
  )
}
