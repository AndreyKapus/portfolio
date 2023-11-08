import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <h1>Error 404. Page not found</h1>
      Please, <Link href={"/"}>go back to main page</Link>
    </>
  );
};

export default ErrorPage;
