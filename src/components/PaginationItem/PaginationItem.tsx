import React from "react";

export default function PaginationItem({num, title, description}: {num: string, title: string, description: string}) {
  return (
    <div className="pagintion mt-4 items-start text-black  flex">
      <div className="flex  flex-col items-center mr-5 ">
        <span className="text-xs lg:text-[10px] font-general mt-[0.6px]">
          {num}
        </span>
        <span className="lineContrainer bg-gray-300/80 relative overflow-hidden rounded-lg h-24 w-1 mt-4">
          <span className="line bg-gray-800/80 absolute top-0 -translate-y-full rounded-lg h-24 w-1 mt-4"></span>
        </span>
      </div>
      <div className="pagination2 flex flex-col gap-2 relative font-robert-regular">
        <h4 className="title">{title}</h4>
        <div className="h-auto">
          <p className="max-w-64 absolute top-7 text-xs lg:text-sm font-circular-web">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
}
