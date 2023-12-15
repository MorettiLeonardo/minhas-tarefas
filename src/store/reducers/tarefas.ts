import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enuns from '../../utils/enums/tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'estudar TypeScript',
      enuns.Prioridade.IMPORTANTE,
      enuns.Status.PENDENTE,
      'Assistir a aula 5 da EBAC de TypeScript',
      1
    ),
    new Tarefa(
      'reuniao',
      enuns.Prioridade.URGENTE,
      enuns.Status.PENDENTE,
      'reuniao as 19:00',
      2
    ),
    new Tarefa(
      'academia',
      enuns.Prioridade.NORMAL,
      enuns.Status.CONCLUIDA,
      'ir para academia as 12:00 e fazer treino B',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
