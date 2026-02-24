import profilePhoto from './assets/profilePhoto.jpg'

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="# hakkimda ">Hakkimda</a></li>
            <li><a href="# projeler ">Projeler</a></li>
            <li><a href="# iletisim ">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Hüseyin Enes Ertürk - Kişisel Portfolyo Taslak</h1>
        
        <section id=" hakkimda ">
          <figure>
            <img src={profilePhoto}
                 alt="Hüseyin Enes Ertürk'ün vesikalık fotoğrafı." />
            <figcaption>Hüseyin Enes Ertürk</figcaption>        
          </figure>
          <h2>Hakkimda</h2>
          {<p>Merhaba ben Hüseyin Enes Ertürk</p>}
        </section>

        <section id=" projeler ">
          <h2>Projelerim</h2>
            <h3>Jobverse</h3>
            <p>İş ilanlarından analizler oluşturan iş bulma platformu.</p>
            <h3>Commsitumo</h3>
            <p>Youtube yorum analizi web uygulaması.</p>
        </section>

        <section id=" iletisim ">
          <h2>Iletisim</h2>
          {<p>huseyineneserturk@gmail.com</p>}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Hüseyin Enes Ertürk. Tum haklari saklidir.</p>
      </footer>
    </>
  )
}

export default App