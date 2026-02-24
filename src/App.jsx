import './App.css'
import profilePhoto from './assets/profilePhoto.jpg'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>
      <header>
        <div className="header-title">
          <span>Hüseyin Enes Ertürk</span>
        </div>
        <nav aria-label="Ana Navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <h1>Hüseyin Enes Ertürk - Kişisel Portfolyo Taslak</h1>
        
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src={profilePhoto}
                 alt="Hüseyin Enes Ertürk'ün vesikalık fotoğrafı." />
            <figcaption>Hüseyin Enes Ertürk</figcaption>
          </figure>
          <p>Merhaba, ben Hüseyin Enes Ertürk.</p>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>Python</li>
            <li>HTML &amp; CSS</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <article>
            <h3>Jobverse</h3>
            <p>İş ilanlarından analizler oluşturan iş bulma platformu.</p>
            <ul>
              <li>Python</li>
              <li>React</li>
              <li>REST API</li>
            </ul>
          </article>
          <article>
            <h3>Commsitumo</h3>
            <p>YouTube yorum analizi web uygulaması.</p>
            <ul>
              <li>Python</li>
              <li>NLP</li>
              <li>JavaScript</li>
            </ul>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name"
                  required minLength={2}
                  aria-describedby="name-error" />
                <small id="name-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email"
                  required
                  aria-describedby="email-error" />
                <small id="email-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required
                  aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg"
                  role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea id="message" name="message"
                  rows={5} required minLength={10}
                  aria-describedby="message-error">
                </textarea>
                <small id="message-error" className="error-msg"
                  role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Hüseyin Enes Ertürk. Tum haklari saklidir.</p>
        <ul>
          <li><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </footer>
    </>
  )
}

export default App