import React, { useContext } from 'react';
import { DashboardContext } from '../../contexts/DashboardContext';
import { useForm } from 'react-hook-form';
import {
  CloseIcon,
  StyledButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledTextArea,
  Warning,
} from './styles';

interface Props {
  handleClose: () => void;
  dashboardId?: string;
}

const Form = ({ handleClose, dashboardId = '' }: Props) => {
  type Inputs = {
    title: string;
    description: string;
    votes: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { createDashboards, updateDashboards } = useContext(DashboardContext);

  return (
    <StyledForm
      onSubmit={handleSubmit(data => {
        if (!!dashboardId as boolean) updateDashboards(dashboardId, data);
        else createDashboards(data);

        handleClose();
      })}
    >
      <StyledLabel fontSize="2rem" align="center">
        {dashboardId ? 'Edite sua Retro' : 'Crie sua Retro'}
      </StyledLabel>
      <StyledLabel>Nome da Retro:</StyledLabel>
      <StyledInput
        {...register('title', { required: true, maxLength: 40 })}
        type="text"
        name="title"
        validation={errors.title}
      />
      {errors.title && (
        <Warning>
          {errors.title.type === 'required'
            ? 'Campo de Nome não pode estar vazio'
            : 'Ultrapassou o limite de caracteres'}
        </Warning>
      )}
      <StyledLabel>Descrição da Retro:</StyledLabel>
      <StyledTextArea
        {...register('description', { required: true, maxLength: 125 })}
        name="description"
        validation={errors.description}
      />
      {errors.description && (
        <Warning>
          {errors.description.type === 'required'
            ? 'Campo de Descrição não pode estar vazio'
            : 'Ultrapassou o limite de caracteres'}
        </Warning>
      )}
      <StyledLabel>Quantidade de Votos:</StyledLabel>
      <StyledInput
        {...register('votes', { required: true })}
        type="number"
        min="1"
        max="10"
        name="votes"
        inputWidth="20%"
        validation={errors.votes}
      />
      {errors.votes && (
        <Warning>Adicione uma quantidade mínima de votos</Warning>
      )}
      <StyledButton type="submit">
        {dashboardId ? 'Editar Retro' : 'Criar Retro'}
      </StyledButton>
      <CloseIcon onClick={handleClose}>X</CloseIcon>
    </StyledForm>
  );
};

export default Form;
