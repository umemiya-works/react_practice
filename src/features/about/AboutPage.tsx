import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Draggable from '../../components/Draggable';
import Droppable from '../../components/Droppable';

function AboutPage() {
  const [parent, setParent] = useState<string | null>(null);
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
      <Link to="/">
        Home
      </Link>
    </>
  )
}

export default AboutPage