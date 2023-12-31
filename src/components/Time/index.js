import Colaborador from '../Colaborador'
import './style.css'

const Time = props => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: props.corSecundaria }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        {props.colaboradores.map(colaborador => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            color={props.corPrimaria}
          />
        ))}
      </section>
    )
  )
}

export default Time
