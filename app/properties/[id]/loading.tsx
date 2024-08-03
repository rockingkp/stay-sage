"use client";

import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div>
      <Skeleton className="h-[300px] md:h-[500px] w-full rounded" />
    </div>
  );
};

export default loading;
