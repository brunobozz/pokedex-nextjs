import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="navbar bg-primary">
          <div className="container">
            <div className="d-flex align-items-center fs-3 text-light">
              <i className="fa fa-home"></i>
              <span className="ms-2">NAME</span>
            </div>
            <div>
              <button className="btn btn-info btn-sm">
                <i className="fa fa-sign-in"></i>
                <span className="ms-2">Login</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
