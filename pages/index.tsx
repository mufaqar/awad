import Head from 'next/head';
import Slider from '../components/slider';
import Layout from '../components/layout';


export default function Home() {
  return (
    <>
      <Head>
        <title>Abdullah Awad</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Slider />
      </Layout>
    </>
  )
}
