import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar } from '../../store/reducers/tarefas'

import * as S from './styles'

import TarefaClass from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const [estaEditanto, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setDescricao(descricaoOriginal)
    setEstaEditando(false)
  }
  const dispatch = useDispatch()

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tags parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tags>
      <S.Tags parametro="status" status={status}>
        {status}
      </S.Tags>
      <S.Descricao
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        disabled={!estaEditanto}
      />
      <S.BarraAcoes>
        {estaEditanto ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    descricao,
                    id,
                    prioridade,
                    status,
                    titulo
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarERemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarERemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarERemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarERemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Tarefa
