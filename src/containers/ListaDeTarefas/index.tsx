import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'estudar ts',
    descricao: 'ver aula 3',
    prioridade: 'importante',
    status: 'pendente'
  },
  {
    titulo: 'pagar internet',
    descricao: 'baixar boleto no email',
    prioridade: 'urgente',
    status: 'concluido'
  },
  {
    titulo: 'academia',
    descricao: 'fazer treino B',
    prioridade: 'importante',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => {
  return (
    <Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              titulo={t.titulo}
              descricao={t.descricao}
              prioridade={t.prioridade}
              status={t.status}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
