import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { Campo } from '../../styles/index'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

import * as enuns from '../../utils/enums/tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enuns.Status.PENDENTE}
            criterio="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enuns.Status.CONCLUIDA}
            criterio="status"
            legenda="concluidas"
          />
          <FiltroCard
            valor={enuns.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enuns.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="urgente"
          />
          <FiltroCard
            valor={enuns.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard criterio="todas" legenda="todas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
