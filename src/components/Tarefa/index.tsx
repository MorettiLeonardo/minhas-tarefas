import { useState } from 'react'
import * as S from './styles'

import * as enuns from '../../utils/enums/tarefa'

type Props = {
  titulo: string
  prioridade: enuns.Prioridade
  status: enuns.Status
  descricao: string
}

const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditanto, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tags parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tags>
      <S.Tags parametro="status" status={status}>
        {status}
      </S.Tags>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditanto ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelarERemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarERemover>Remover</S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
