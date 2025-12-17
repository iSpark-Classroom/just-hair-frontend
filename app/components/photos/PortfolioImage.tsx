import Image from "next/image";
import React from "react";

const PortfolioImage = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src}
        alt=""
        height={200}
        width={200}
        className="object-cover rounded-xl overflow-hidden h-50 w-50 shadow-sm"
      />
    </div>
  );
};

export default PortfolioImage;
