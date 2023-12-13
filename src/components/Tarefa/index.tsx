import * as S from './styles'

const Tarefa = () => (
  <S.Card>
    <S.Titulo>Nome tarefa</S.Titulo>
    <S.Tags>Importante</S.Tags>
    <S.Tags>pendente</S.Tags>
    <S.Descricao />
    <S.BarraAcoes>
      <S.Botao>Editart</S.Botao>
      <S.Botao>Remover</S.Botao>
    </S.BarraAcoes>
  </S.Card>
)
export default Tarefa
