import { useDroppable } from '@dnd-kit/core';

type Props = {
  id: string;
  children: React.ReactNode;
};

export default function Droppable(props: Props) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    opacity: isOver ? 0.5 : 1,
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}