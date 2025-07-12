"use server";

import { getMininPoolDetails } from "@/lib/data";

//Это как бы сервер экшинс, но можно и сделать через api routes как /mining-pools/:id
export const getMiningPoolById = async (id: string) => {
  try {
    const allDetailedMainingPools = await getMininPoolDetails();

    const detailedMainingPool = allDetailedMainingPools.find(
      (dmp) => dmp.parentId === id
    );

    if (!detailedMainingPool)
      return {
        success: false,
        message: "No detailed mining pool with given ID",
      };

    return { success: true, data: detailedMainingPool };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
};
