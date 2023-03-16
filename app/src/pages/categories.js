
import Head from "next/head";
import Menu from "@/components/Menu";

export default function Categories() {

  return (
    <div>
      <Head>
        <title>Categories</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu/>
      </main>
    </div>
  )
}