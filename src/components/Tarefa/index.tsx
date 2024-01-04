import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { remover, editar, alteraStatus } from '../../store/reducers/tarefas'

import * as S from './styles'

import * as enuns from '../../utils/enums/tarefa'

import TarefaClass from '../../models/Tarefa'
import { Botao, BotaoSalvar } from '../../styles'

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

  function alteraStatusTarefa(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.checked)
    dispatch(alteraStatus({ id, finalizado: event.target.checked }))
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          checked={status === enuns.Status.CONCLUIDA}
          id={titulo}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditanto && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
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
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
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
