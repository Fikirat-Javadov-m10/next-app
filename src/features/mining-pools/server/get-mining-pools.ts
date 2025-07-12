"use server";

import { http } from "@/lib/axios";
import { MiningPool, SortSearchParams } from "@/features/mining-pools/types";
import { sortByField } from "@/features/mining-pools/utils";

export const getMiningPools = async ({
  sort,
  order = "asc",
}: SortSearchParams = {}) => {
  try {
    const { data } = await http<{ data: MiningPool[] }>(
      "/mining_pools_data.json"
    );
    const miningPools = data.data;
    const result = sort ? sortByField(miningPools, sort, order) : data.data;

    return { success: true, data: result };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
};
