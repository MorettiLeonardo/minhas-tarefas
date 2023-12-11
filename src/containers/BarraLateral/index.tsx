import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
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
