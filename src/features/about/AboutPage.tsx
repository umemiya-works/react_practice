import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Draggable from '../../components/Draggable';
import Droppable from '../../components/Droppable';
import ReturnModal from '../../components/ReturnModal';

export default function AboutPage() {
  const [parent, setParent] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const draggable = (
    <Draggable id="draggable">
      <div>Drag me</div>
    </Draggable>
  );
  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    setParent(over ? over.id.toString() : null);
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        {!parent ? draggable : parent}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
      </DndContext>
      <a
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsModalOpen(true)
        }}
      >
        Home
      </a>
      <ReturnModal
        isOpen={isModalOpen}
        onCancel={() => (
          setIsModalOpen(false)
        )}
        onConfirm={() => (
          window.location.href = '/'
        )}
        cancelLabel="Close"
        confirmLabel="Go Home"
      >
        Home
      </ReturnModal>
    </>
  )
}