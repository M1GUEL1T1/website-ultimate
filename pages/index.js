import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Yordanys Paint & Remodeling" />
        <p className="centered-text">
          A fast and affordable south florida paint and remodeling service. 
          Please contact us at <code>786-778-2838</code> 
        </p> 
        <p className="centered-text">
        Para español, por favor contáctenos al <code>786-294-5443</code> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
