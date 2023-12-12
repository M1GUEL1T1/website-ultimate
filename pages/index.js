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
        <p className="description">
          A fast and affordale paint & remodeling service located in south florida. Contact <code>786-778-2838</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
