import React from 'react';
import { NoteCardProps } from '../../interfaces';
import {
  NavContainer,
  NoteCardBoard,
  NoteLikeContainer,
  NoteLikeIcon,
  NoteLikeScore,
  NoteText,
  NoteTrashIcon,
} from './styles';

const NoteCard = ({
  provided,
  snapshot,
  note,
  handleEvaluateNote,
  handleDeleteNote,
}: NoteCardProps) => {
  return (
    <NoteCardBoard
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
      radioSelect={note.status}
    >
      <NoteText>{note.text}</NoteText>
      <NavContainer>
        <NoteLikeContainer>
          <NoteLikeScore>{note.like}</NoteLikeScore>
          <NoteLikeIcon onClick={() => handleEvaluateNote(note)} />
        </NoteLikeContainer>
        <NoteTrashIcon onClick={() => handleDeleteNote(note)} />
      </NavContainer>
    </NoteCardBoard>
  );
};

export default NoteCard;
