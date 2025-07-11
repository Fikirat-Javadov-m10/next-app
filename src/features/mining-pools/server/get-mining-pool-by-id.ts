"use server";

import { http } from "@/lib/axios";
import { MiningPoolDetiled } from "@/features/mining-pools/types";

export const getMiningPoolById = async (id: string) => {
  try {
    const { data: allDetailedMainingPools } = await http<{
      data: MiningPoolDetiled[];
    }>("/mining_pools_details_data.json");

    const detailedMainingPool = allDetailedMainingPools.data.find(
      (dmp) => dmp.parentId === id
    );

    if (!detailedMainingPool)
      return {
        success: false,
        message: "No detailed mining pool with given ID",
      };

    return { success: true, data: detailedMainingPool };
  } catch (error) {
    return { success: false, message: "Something went wrong" };
  }
};
