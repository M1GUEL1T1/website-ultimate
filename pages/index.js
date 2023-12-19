import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>TMG Remodeling</title>
        <link rel="icon" href="/logo_painter.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Header title="TM & G Remodeling and Construction" classname="container"/>
        <p className="centered-text">
          An affordable south florida paint and remodeling service.  
        </p> 
        <p className="description">
        Please contact us at: <code>786-778-2838</code>
        </p>
        <img className="img-responsive" src="/logo_painter.png" alt="Image 1" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 2" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 3" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 4" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 5" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 6" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 7" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 8" />
        <img className="img-responsive" src="/logo_painter.png" alt="Image 9" />
        
        <div className="backToTop">
        <button onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
      </div>
      </main>

      <Footer />
    </div>
  )
}