import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className="fixed w-screen h-screen overflow-hidden">
      <Component {...pageProps} />
    </div>
  );
}
