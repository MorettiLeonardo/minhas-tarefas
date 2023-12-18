import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(ev) => dispatch(alteraTermo(ev.target.value))}
        />
        <S.Filtros>
          <FiltroCard contador={4} legenda="pendentes" />
          <FiltroCard contador={2} legenda="concluidas" />
          <FiltroCard contador={3} legenda="importantes" />
          <FiltroCard contador={6} legenda="pendentes" />
          <FiltroCard contador={1} legenda="urgentes" />
          <FiltroCard ativo contador={3} legenda="concluidas" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
