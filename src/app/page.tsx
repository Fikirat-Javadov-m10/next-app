import PoolTable from "@/features/mining-pools/components/PoolTable";
import { getMiningPools } from "@/features/mining-pools/server";
import { MiningPool } from "@/features/mining-pools/types";

export default async function Home() {
  const res = await getMiningPools();

  if (!res.data) return null;

  return (
    <div className="">
      <PoolTable miningPools={res.data} />
    </div>
  );
}
