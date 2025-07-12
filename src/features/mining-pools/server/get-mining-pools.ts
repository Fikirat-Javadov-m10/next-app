"use server";

import { SortSearchParams } from "@/features/mining-pools/types";
import { sortByField } from "@/features/mining-pools/utils";
import { getMininPools } from "@/lib/data";

//Это как бы сервер экшинс, но можно и сделать через api routes как /mining-pools
export const getMiningPools = async ({
  sort,
  order = "asc",
}: SortSearchParams = {}) => {
  try {
    const miningPools = await getMininPools();
    const result = sort ? sortByField(miningPools, sort, order) : miningPools;

    return { success: true, data: result };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
};
