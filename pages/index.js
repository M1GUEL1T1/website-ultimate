import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TMG Remodeling</title>
        <link rel="icon" href="/logo_painter.ico" />
      </Head>

      <main>
        <Header title="TM & G Remodeling and Construction" classname="centered-text"/>
        <p className="centered-text">
          An affordable south florida paint and remodeling service.  
        </p> 
        <p className="description">
        Please contact us at: <code>786-778-2838</code>
        </p>
        <p className="centered-text">
        Español: <code>786-294-5443</code> 
        </p>
        <img src="/logo_painter.png" alt="Image 1" />
        <img src="/logo_painter.png" alt="Image 2" />
        <img src="/logo_painter.png" alt="Image 3" />
        <img src="/logo_painter.png" alt="Image 4" />
        <img src="/logo_painter.png" alt="Image 5" />
        <img src="/logo_painter.png" alt="Image 6" />
        <img src="/logo_painter.png" alt="Image 7" />
        <img src="/logo_painter.png" alt="Image 8" />
      </main>

      <Footer />
    </div>
  )
}