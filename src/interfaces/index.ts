import {
  DraggableProvided,
  DraggableStateSnapshot,
  DropResult,
} from 'react-beautiful-dnd';

export interface Note {
  id?: string;
  text: string;
  status: string;
  like: number;
}
export interface IColumns {
  [columns: string]: {
    name: string;
    column: string;
    items: Note[];
  };
}

export interface ParamsState {
  id: string;
  title: string;
  description: string;
  votes: number;
}

export interface AddBoxProps {
  boxText?: string;
  handleClick: () => void;
}

export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export interface NoteCardProps {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  note: Note;
  handleEvaluateNote: (note: Note) => void;
  handleDeleteNote: (note: Note) => void;
}

export interface FormProps {
  handleClose: () => void;
  dashboardId?: string;
}

export interface Dashboard {
  id?: string;
  title: string;
  description: string;
  votes: string;
}

export interface DashBoardContextInterface {
  createDashboards: (data: Dashboard) => void;
  updateDashboards: (id: string, data: Dashboard) => void;
  deleteDashboards: (id: string) => void;
  dashboards: Dashboard[];
  navigateToPage: (dashboard: Dashboard) => void;
}

export interface RetrospectiveContextInterface {
  columns: IColumns;
  title: string;
  description: string;
  votes: number;
  radioSelect: string;
  noteText: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleOnDragEnd: (result: DropResult) => void;
  handleEvaluateNote: (
    note: Note,
    column: {
      name: string;
      column: string;
      items: Note[];
    },
  ) => void;
  handleDeleteNote: (
    note: Note,
    column: {
      name: string;
      column: string;
      items: Note[];
    },
  ) => void;
}
