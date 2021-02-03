import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Squash demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Squash demo
        </h1>
       <div className={styles.card}>
          <p>
            Hei! am făcut un mic tutorial despre squash, e destul de basic, dar pentru început e de ajuns pentru ce avem nevoie să facem.
          </p>
          <p>Așa că let's get started!</p>
          <p>În exemplul de mai jos eu am făcut squash la ultimul commit. (l-am inclus în anteriorul). Pentru că știam că am doar 2 commit-uri, am rulat comanda <strong>git rebase -i HEAD~2</strong></p>
          <p>De obicei se întâmplă să avem mai multe commit-uri și nu mai știm exact numărul lor.Putem rula <strong>git log </strong>și vom vedea un istoric.</p>
          <p>Așa că după ce ne-am decis la câte commit-uri vom face squash, vom rula <strong>git rebase -i HEAD~n</strong> unde n este numărul de commit-uri</p>
          <p>PS: În video rulez și comenzile pentru a face un commit </p>
       </div>
       
      
        <video controls
    src="../video/squash_demo.mp4"
    poster=""
   width="85%">

<p>Sorry, your browser doesn't support embedded videos.</p>
</video>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
         Made with passion and coffee {' '} by Diana  
        </a>
      </footer>
    </div>
  )
}
