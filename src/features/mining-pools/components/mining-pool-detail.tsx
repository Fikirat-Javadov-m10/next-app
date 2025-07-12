import { getMiningPoolById } from "@/features/mining-pools/server/get-mining-pool-by-id";
import { MiningPoolModal } from "./mining-pool-modal";

type MiningPoolDetailProps = {
  id: string;
};

export const MiningPoolDetail = async ({ id }: MiningPoolDetailProps) => {
  const { data } = await getMiningPoolById(id);
  if (!data) return null;

  return <MiningPoolModal data={data} />;
};
