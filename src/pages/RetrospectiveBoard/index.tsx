import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import {
  ColumnsContainer,
  ColumnsLabel,
  DragDrogColumns,
  DragDrogContainer,
  DroppableArea,
  EvaluateArea,
  EvaluateRetroButton,
  EvaluateRetroText,
  NoteCard,
  NoteText,
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
import { v4 as idGenerator } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Note {
  id?: string;
  text: string;
  status: string;
}

const RetrospectiveBoard = () => {
  const params = useLocation();
  const { id, title, description, votes } = params.state as ParamsState;
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesLocalStorage = localStorage.getItem(`notes-${id}`);
    return notesLocalStorage ? JSON.parse(notesLocalStorage) : [];
  });

  const columnsSetup = {
    ['notes']: {
      name: 'Todas as anotações',
      items: notes,
    },
    ['positivePoints']: {
      name: 'Pontos Positivos',
      items: [],
    },
    ['negativePoints']: {
      name: 'Pontos Negativos',
      items: [],
    },
    ['inProgress']: {
      name: 'Em Progresso',
      items: [],
    },
  };

  useEffect(() => {
    addNotesToLocalStorage();
    setColumns(columnsSetup);
  }, [notes]);

  const addNotesToLocalStorage = () => {
    localStorage.setItem(`notes-${id}`, JSON.stringify(notes));
  };

  const [columns, setColumns] = useState<IColumns>(columnsSetup);
  const [radioSelect, setRadioSelect] = useState<string>('positive');
  const [noteText, setNoteText] = useState<string>('');
  const [allowDraggable, setAllowDraggable] = useState(false);

  interface IColumns {
    [columns: string]: {
      name: string;
      items: {
        id?: string;
        text: string;
        status: string;
      }[];
    };
  }

  const onDragEnd = (
    result: DropResult,
    columns: IColumns,
    setColumns: React.Dispatch<React.SetStateAction<IColumns>>,
  ) => {
    if (!result.destination || !allowDraggable) {
      toast.error('Não é possível arrastar ');
      return;
    }
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  interface ParamsState {
    id: string;
    title: string;
    description: string;
    votes: number;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioSelect(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!noteText) {
      toast.error('Nota não pode estar vazia');
      return;
    }

    setNotes([
      ...notes,
      { id: idGenerator(), text: noteText, status: radioSelect },
    ]);
  };

  const handleEvaluateButton = () => {
    setAllowDraggable(!allowDraggable);
    if (allowDraggable) setColumns(columnsSetup);
  };

  const EvaluateTextsValues = {
    startEvaluation:
      'Obs: Para liberar o modo de avaliação , onde é possível arrastar as notas é preciso iniciar a avaliação.',
    finalizeEvaluation:
      'Obs: Não é possível adicionar notas no modo de avaliação , finalize a avaliação e adicione mais notas.',
  };

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
      {!allowDraggable && (
        <RetroForm onSubmit={e => handleSubmit(e)}>
          <RetroInput
            value={noteText}
            type="text"
            name="note"
            placeholder="O que rolou na Sprint ?"
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
      )}
      <EvaluateArea>
        <EvaluateRetroText>
          {allowDraggable
            ? EvaluateTextsValues.finalizeEvaluation
            : EvaluateTextsValues.startEvaluation}
        </EvaluateRetroText>

        <EvaluateRetroButton
          allowDraggable={allowDraggable}
          onClick={() => handleEvaluateButton()}
        >
          {!allowDraggable ? 'Iniciar avaliação' : 'Finalizar avaliação'}
        </EvaluateRetroButton>
      </EvaluateArea>
      <DragDrogContainer>
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
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
                          allowDraggable={!allowDraggable}
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
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      isDragging={snapshot.isDragging}
                                      radioSelect={item.status}
                                    >
                                      <NoteText>{item.text}</NoteText>
                                    </NoteCard>
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
