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
  FormTitle,
  FormGroup,
} from './styles';
import { FormProps } from '../../interfaces';

const Form = ({ handleClose, dashboardId = '' }: FormProps) => {
  type Inputs = {
    title: string;
    description: string;
    votes: string;
  };

  const { createDashboards, updateDashboards, dashboards } = useContext(DashboardContext);

  const dashboardToEdit = dashboards.find(d => d.id === dashboardId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: dashboardId ? {
      title: dashboardToEdit?.title,
      description: dashboardToEdit?.description,
      votes: dashboardToEdit?.votes,
    } : undefined
  });

  return (
    <StyledForm
      onSubmit={handleSubmit(data => {
        if (!!dashboardId as boolean) updateDashboards(dashboardId, data);
        else createDashboards(data);

        handleClose();
      })}
    >
      <FormTitle>
        {dashboardId ? 'Editar Retrospectiva' : 'Nova Retrospectiva'}
      </FormTitle>
      
      <FormGroup>
        <StyledLabel>Nome da Retro</StyledLabel>
        <StyledInput
          {...register('title', { required: true, maxLength: 40 })}
          type="text"
          placeholder="Ex: Retro Sprint 1"
          validation={!!errors.title}
        />
        {errors.title && (
          <Warning>
            {errors.title.type === 'required'
              ? 'O nome é obrigatório'
              : 'Máximo de 40 caracteres'}
          </Warning>
        )}
      </FormGroup>

      <FormGroup>
        <StyledLabel>Descrição</StyledLabel>
        <StyledTextArea
          {...register('description', { required: true, maxLength: 125 })}
          placeholder="O que vamos discutir hoje?"
          validation={!!errors.description}
        />
        {errors.description && (
          <Warning>
            {errors.description.type === 'required'
              ? 'A descrição é obrigatória'
              : 'Máximo de 125 caracteres'}
          </Warning>
        )}
      </FormGroup>

      <FormGroup>
        <StyledLabel>Quantidade de Votos por Pessoa</StyledLabel>
        <StyledInput
          {...register('votes', { required: true })}
          type="number"
          min="1"
          max="20"
          placeholder="5"
          validation={!!errors.votes}
        />
        {errors.votes && (
          <Warning>Informe a quantidade de votos (1-20)</Warning>
        )}
      </FormGroup>

      <StyledButton type="submit">
        {dashboardId ? 'Salvar Alterações' : 'Criar Retrospectiva'}
      </StyledButton>
      
      <CloseIcon type="button" onClick={handleClose}>&times;</CloseIcon>
    </StyledForm>
  );
};

export default Form;
