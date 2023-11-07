const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Montserrat", sans-serif;
        }

        li {
          list-style: none;
        }

        h1,
        h2,
        h3,
        h4,
        p {
          margin: 0px;
        }
      `}</style>
    </>
  );
};

export default MyApp;
