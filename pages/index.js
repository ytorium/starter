import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mt-4 max-w-xs p-4 md:max-w-md lg:max-w-2xl xl:max-w-4xl mx-auto">
      <Head>
        <title>Next Twitter Starter</title>
        <meta name="description" content="Next Twitter Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10">
        <h1 className="text-3xl font-bold">
          Welcome to Next.js twitter starter.
        </h1>

        <Link href="/twitter" className="flex items-center p-8 mt-8 border rounded-md space-x-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className=" top-0 left-0 h-8 w-8 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
          </svg>
          <p className="font-semibold text-lg">Checkout the sample page built using Twitter API &rarr;</p>
        </Link>

        </main>
    </div>
  )
}
