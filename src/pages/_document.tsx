import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Um desenvolvedor web apaixonado por tecnologia e inovação, que está sempre em busca de novas formas de criar soluções digitais excepcionais. Descubra como ele pode ajudar a levar seus projetos online para o próximo nível."
        />
        <title>Abraão´s Portfolio</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
