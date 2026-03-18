import React, { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {
  ColumnsContainer,
  ColumnsLabel,
  DragDrogColumns,
  DragDrogContainer,
  DroppableArea,
  RetroButton,
  RetroDescription,
  RetroForm,
  RetroHeader,
  RetroInput,
  RetroLabel,
  RetroSection,
  RetroTitle,
  VotesBadge,
  HeaderContent,
  InfoGroup,
  InputGroup,
  ErrorMessage,
  ErrorContainer,
} from './styles';
import NoteCard from '../../components/NoteCard';
import { RetrospectiveContext } from '../../contexts/RetrospectiveContext';
import { Note } from '../../interfaces';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RetrospectiveBoard = () => {
  const {
    columns,
    title,
    description,
    votes,
    noteText,
    errorMessage,
    handleInputChange,
    handleSubmit,
    handleOnDragEnd,
    handleEvaluateNote,
    handleDeleteNote,
  } = useContext(RetrospectiveContext);

  return (
    <RetroSection>
      <RetroHeader>
        <HeaderContent>
          <InfoGroup>
            <RetroLabel>Quadro de Retrospectiva</RetroLabel>
            <RetroTitle>{title}</RetroTitle>
            <RetroDescription>{description}</RetroDescription>
          </InfoGroup>
          <VotesBadge>
            <span>Votos Disponíveis</span>
            <span>{votes}</span>
          </VotesBadge>
        </HeaderContent>
      </RetroHeader>

      <RetroForm onSubmit={e => handleSubmit(e)}>
        <InputGroup>
          <RetroInput
            value={noteText}
            type="text"
            name="note"
            placeholder="O que você tem em mente?"
            maxLength={120}
            onChange={e => handleInputChange(e)}
          />
          <RetroButton type="submit">Criar Nota</RetroButton>
        </InputGroup>
        <ErrorContainer>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </ErrorContainer>
      </RetroForm>

      <DragDrogContainer>
        <DragDropContext onDragEnd={result => handleOnDragEnd(result)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <DragDrogColumns key={columnId}>
                <ColumnsLabel>{column.name}</ColumnsLabel>
                <ColumnsContainer>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <DroppableArea
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          isDragging={snapshot.isDraggingOver}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id as string}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <NoteCard
                                      handleEvaluateNote={(note: Note) =>
                                        handleEvaluateNote(note, column)
                                      }
                                      handleDeleteNote={(note: Note) =>
                                        handleDeleteNote(note, column)
                                      }
                                      provided={provided}
                                      snapshot={snapshot}
                                      note={item}
                                    />
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </DroppableArea>
                      );
                    }}
                  </Droppable>
                </ColumnsContainer>
              </DragDrogColumns>
            );
          })}
        </DragDropContext>
      </DragDrogContainer>
      <ToastContainer autoClose={3000} position="top-right" />
    </RetroSection>
  );
};

export default RetrospectiveBoard;
