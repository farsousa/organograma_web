import './style.css'

const CampoTexto = props => {
  const placeholderModificado = `${props.placeholder}...`

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={evento => props.aoAlterar(evento.target.value)}
        value={props.valor}
        placeholder={placeholderModificado}
        required={props.obrigatorio}
      />
    </div>
  )
}

export default CampoTexto
