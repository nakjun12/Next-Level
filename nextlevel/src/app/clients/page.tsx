import Link from "next/link";

export default function Client() {
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        <li>
          <Link href="/clients/max">Maximilian</Link>
        </li>
        <li>
          <Link href="/clients/manu">Manuel</Link>
        </li>
      </ul>
    </div>
  );
}
