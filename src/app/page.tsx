import dynamic from "next/dynamic";

import { MiningPoolTable } from "@/features/mining-pools/components/mining-pool-table";
import { getMiningPools } from "@/features/mining-pools/server";
import { SortSearchParams } from "@/features/mining-pools/types";

const MiningPoolDetail = dynamic(() =>
  import("@/features/mining-pools/components/mining-pool-detail").then(
    (mod) => mod.MiningPoolDetail
  )
);

type Params = { id?: string } & SortSearchParams;

type HomeProps = {
  searchParams: Promise<Params>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const { id, order, sort } = params ?? {};
  const res = await getMiningPools({ order, sort });

  if (!res.data) return null;

  return (
    <>
      {id && <MiningPoolDetail id={id} />}
      <MiningPoolTable data={res.data} />
    </>
  );
}
