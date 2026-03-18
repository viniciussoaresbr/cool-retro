import React, { createContext, useState, useEffect } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useLocation } from 'react-router-dom';
import {
  IColumns,
  Note,
  ParamsState,
  RetrospectiveContextInterface,
} from '../../interfaces';
import { v4 as idGenerator } from 'uuid';
import { toast } from 'react-toastify';

export const RetrospectiveContext = createContext(
  {} as RetrospectiveContextInterface,
);

const RetrospectiveProvider: React.FC = ({ children }) => {
  const params = useLocation();
  const { title, description, votes } = params.state as ParamsState;

  const [columns, setColumns] = useState<IColumns>({
    notes: {
      name: 'Todas as anotações',
      column: 'notes',
      items: [],
    },
    positive: {
      name: 'Pontos Positivos',
      column: 'positive',
      items: [],
    },
    negative: {
      name: 'Pontos Negativos',
      column: 'negative',
      items: [],
    },
    inProgress: {
      name: 'Em Progresso',
      column: 'inProgress',
      items: [],
    },
  });

  const [noteText, setNoteText] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => setErrorMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(e.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!noteText.trim()) {
      setErrorMessage('A nota não pode estar vazia');
      return;
    }

    setColumns({
      ...columns,
      notes: {
        ...columns.notes,
        items: [
          ...columns.notes.items,
          {
            id: idGenerator(),
            text: noteText,
            like: 0,
          },
        ],
      },
    });

    setNoteText('');
    setErrorMessage('');
  };

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) {
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

  const handleEvaluateNote = (
    note: Note,
    column: {
      name: string;
      column: string;
      items: Note[];
    },
  ) => {
    let totalLikesClicked = 0;
    Object.keys(columns).forEach(key => {
      totalLikesClicked =
        totalLikesClicked +
        columns[key].items.reduce(
          (prevValue, item) => prevValue + item.like,
          0,
        );
    });

    if (
      columns[column.column].items.some(item => item.id === note.id) &&
      totalLikesClicked < votes
    ) {
      setColumns({
        ...columns,
        [column.column]: {
          ...column,
          items: columns[column.column].items.map(item => {
            if (item.id === note.id) {
              return {
                ...item,
                like: item.like + 1,
              };
            } else {
              return item;
            }
          }),
        },
      });
    } else if (totalLikesClicked >= votes) {
      toast.error(`Limite de ${votes} votos atingido`);
    }
  };

  const handleDeleteNote = (
    note: Note,
    column: {
      name: string;
      column: string;
      items: Note[];
    },
  ) => {
    setColumns({
      ...columns,
      [column.column]: {
        ...column,
        items: columns[column.column].items.filter(item => item.id !== note.id),
      },
    });
  };

  return (
    <RetrospectiveContext.Provider
      value={{
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
      }}
    >
      {children}
    </RetrospectiveContext.Provider>
  );
};

export default RetrospectiveProvider;
