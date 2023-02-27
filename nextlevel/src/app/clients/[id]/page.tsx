"use client";

import { useRouter } from "next/navigation";


export default function ClientId({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  console.log(params);
  console.log(searchParams);

  const router = useRouter();
  const routerClick = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={routerClick}></button>
    </div>
  );
}
