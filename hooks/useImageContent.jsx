import Image from "next/image";
import { useState, useMemo } from "react";

const useImageContent = (industryList) => {
  const [imgChange, setImgChange] = useState(0); 

  const content = useMemo(() => {
    const image = industryList[imgChange]?.heading;
    return image ? (
      <svg
        viewBox="0 0 1215 809"
        style={{
          width: "90%",
        }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hinge */}
        <rect x="950" y="740" width="100" height="44" fill="#181818" />
        <rect x="149" y="740" width="100" height="44" fill="#181818" />

        {/* Frame */}
        <rect x="47" width="1120" height="745" rx="30" fill="#222"/>
        {/* Screen */}
        <rect x="77" y="30" width="1060" height="663" fill="#333" />

        {/* Camera */}
        <circle cx="607.5" cy="12.5" r="7.5" fill="#000" />

        {/* Bottom */}
        <rect x="25" y="790" width="1165" height="19" rx="1" fill="#181818" />

        {/* Triangles */}
        <path
          d="M24.9784 807.681C25.2986 807.877 25.7014 807.877 26.0216 807.681L44.5521 796.353C45.4138 795.826 45.0404 794.5 44.0306 794.5H6.96945C5.95958 794.5 5.58624 795.826 6.44787 796.353L24.9784 807.681Z"
          fill="#181818"
        />
        <path
          d="M1188.98 808.681C1189.3 808.877 1189.7 808.877 1190.02 808.681L1208.55 797.353C1209.41 796.826 1209.04 795.5 1208.03 795.5H1170.97C1169.96 795.5 1169.59 796.826 1170.45 797.353L1188.98 808.681Z"
          fill="#181818"
        />

        {/* keyboard */}
        <rect x="2" y="763" width="1210" height="35" rx="7" fill="#222" />

        {/* Touch */}
        <path
          d="M518 763H696C696.552 763 697 763.448 697 764V773C697 778.523 692.523 783 687 783H528C522.477 783 518 778.523 518 773V763Z"
          fill="#181818"
        />

        <foreignObject width="1060" height="663" x="77" y="30">
        <Image
          src={`/Media/img/Service/Lap/${image}.avif`}
          alt={`${image} Design - Made by Qualipact`}
          // Adjust width based on the expected size of the image
          width={1060}
          // Adjust height based on the expected size of the image
          height={663}
          // Apply additional classes as needed
          className="z-10 mx-auto"
          style={{
            height: "100%",
            objectFit: "contain",
            maxWidth: "100%",
            height: "auto"
          }} />
        </foreignObject>
      </svg>
    ) : null;
  }, [imgChange, industryList]);

  return {
    content,
    imgChange,
    setImgChange,
  };
};

export default useImageContent;
