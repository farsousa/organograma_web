import './style.css'

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank">
              <img src="/img/fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <img src="/img/tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <img src="/img/ig.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="/img/logo.png" alt="" />
      </section>
      <section>
        <p>Desenvolvido por farsousa.</p>
      </section>
    </footer>
  )
}

export default Rodape
