const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Montserrat", sans-serif;
        }
      `}</style>
    </>
  );
};

export default MyApp;
