import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Link href="/">
        <p>Next app</p>
      </Link>
      <Link href="/users">
        <p>Users</p>
      </Link>
    </div>
  );
};

export default Index;
