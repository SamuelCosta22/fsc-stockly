import { Skeleton } from "@/app/_components/ui/skeleton";

const MostSoldProductsSkeleton = () => {
  return (
    <Skeleton className="bg-white p-4">
      <div className="space-y-2">
        <Skeleton className="h-7 w-48" />
      </div>

      <div className="flex items-center justify-between pt-5">
        <div className="space-y-2">
          <div className="h-[22px] w-[92px] rounded-md bg-gray-200"></div>
          <div className="h-5 w-[110px] rounded-md bg-gray-200"></div>
          <div className="h-4 w-[150px] rounded-md bg-gray-200"></div>
        </div>
        <div>
          <div className="h-5 w-[86px] rounded-md bg-gray-200"></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-5">
        <div className="space-y-2">
          <div className="h-[22px] w-[92px] rounded-md bg-gray-200"></div>
          <div className="h-5 w-[110px] rounded-md bg-gray-200"></div>
          <div className="h-4 w-[150px] rounded-md bg-gray-200"></div>
        </div>
        <div>
          <div className="h-5 w-[86px] rounded-md bg-gray-200"></div>
        </div>
      </div>
    </Skeleton>
  );
};

export default MostSoldProductsSkeleton;
