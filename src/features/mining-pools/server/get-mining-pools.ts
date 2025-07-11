"use server";

import { http } from "@/lib/axios";
import { MiningPool } from "@/features/mining-pools/types";

export const getMiningPools = async () => {
  try {
    const { data } = await http<{ data: MiningPool[] }>(
      "/mining_pools_data.json"
    );
    const miningPools = data.data;
    return { success: true, data: miningPools };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};
