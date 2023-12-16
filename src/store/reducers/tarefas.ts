import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enuns from '../../utils/enums/tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'estudar typescript aula 04',
      prioridade: enuns.Prioridade.NORMAL,
      status: enuns.Status.PENDENTE,
      titulo: 'estudar TS'
    },
    {
      id: 2,
      descricao: 'estudar javascript aula 03',
      prioridade: enuns.Prioridade.IMPORTANTE,
      status: enuns.Status.CONCLUIDA,
      titulo: 'estudar javascript'
    },
    {
      id: 3,
      descricao: 'estudar react aula 14',
      prioridade: enuns.Prioridade.URGENTE,
      status: enuns.Status.CONCLUIDA,
      titulo: 'estudar react'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
