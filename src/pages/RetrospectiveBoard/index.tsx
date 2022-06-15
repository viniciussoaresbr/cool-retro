import React, { useContext } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import {
  ColumnsContainer,
  ColumnsLabel,
  DragDrogColumns,
  DragDrogContainer,
  DroppableArea,
  RadioButton,
  RadioButtonContainer,
  RadioButtonLabel,
  RadioButtonWrapper,
  RetroButton,
  RetroDescription,
  RetroForm,
  RetroHeader,
  RetroInput,
  RetroLabel,
  RetroSection,
  RetroTitle,
  RetroVotes,
} from './styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoteCard from '../../components/NoteCard';
import { RetrospectiveContext } from '../../contexts/RetrospectiveContext';
import { Note } from '../../interfaces';

const RetrospectiveBoard = () => {
  const {
    columns,
    title,
    description,
    votes,
    radioSelect,
    noteText,
    handleInputChange,
    handleSelectChange,
    handleSubmit,
    handleOnDragEnd,
    handleEvaluateNote,
    handleDeleteNote,
  } = useContext(RetrospectiveContext);

  return (
    <RetroSection>
      <RetroHeader>
        <RetroLabel>Nome:</RetroLabel>
        <RetroTitle>{title}</RetroTitle>
        <RetroLabel>Descrição:</RetroLabel>
        <RetroDescription>{description}</RetroDescription>
        <RetroLabel>Votos:</RetroLabel>
        <RetroVotes>{votes}</RetroVotes>
      </RetroHeader>

      <RetroForm onSubmit={e => handleSubmit(e)}>
        <RetroInput
          value={noteText}
          type="text"
          name="note"
          placeholder="O que rolou na Sprint ?"
          maxLength={40}
          onChange={e => handleInputChange(e)}
        />
        <RetroButton type="submit">Criar Nota</RetroButton>
        <RadioButtonContainer>
          <RadioButtonWrapper>
            <RadioButton
              type="radio"
              name="radio"
              value="positive"
              checked={radioSelect === 'positive'}
              onChange={e => handleSelectChange(e)}
            />
            <RadioButtonLabel />
          </RadioButtonWrapper>
          <RetroLabel fontSize="1rem" margin="1rem">
            Ponto Positivo
          </RetroLabel>
          <RadioButtonWrapper>
            <RadioButton
              type="radio"
              name="radio"
              value="negative"
              red="red"
              checked={radioSelect === 'negative'}
              onChange={e => handleSelectChange(e)}
            />
            <RadioButtonLabel />
          </RadioButtonWrapper>
          <RetroLabel fontSize="1rem" margin="1rem">
            Ponto Negativo
          </RetroLabel>
        </RadioButtonContainer>
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
      <ToastContainer autoClose={2000} />
    </RetroSection>
  );
};

export default RetrospectiveBoard;
