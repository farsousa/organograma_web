import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './style.css'
import { useState } from 'react'

const Formulario = props => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('Front-End')

  const aoCriarCartao = evento => {
    evento.preventDefault()
    props.aoAdicionarColaborador({
      nome,
      cargo,
      imagem,
      time
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('Front-End')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoCriarCartao}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          obrigatorio={true}
          aoAlterar={nome => setNome(nome)}
        />
        <CampoTexto
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          obrigatorio={true}
          aoAlterar={cargo => setCargo(cargo)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          obrigatorio={true}
          aoAlterar={imagem => setImagem(imagem)}
        />
        <ListaSuspensa
          itens={props.times}
          label="Time"
          valor={time}
          obrigatorio={true}
          aoAlterar={time => setTime(time)}
        />
        <Botao texto="Criar cartao" />
      </form>
    </section>
  )
}

export default Formulario
