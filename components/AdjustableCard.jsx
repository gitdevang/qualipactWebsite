import React from "react";
import Image from "next/legacy/image"; // Import next/image

function AdjustableCard({
  divstyle,
  headingstyle,
  pstyle,
  iconstyle,
  IconComp,
  img,
  heading,
  para,
  row,
  rowcol,
}) {
  return (
    <>
      {row ? (
        <div
          className={`p-0 lg:p-5 flex flex-col items-start gap-3 ${divstyle} w-72`}
        >
          <div className="flex gap-5">
            {img ? (
              <Image
                src={img} // Image source
                alt={heading} // Alt text for accessibility
                width={54} // Set a fixed width (16 * 4 for responsiveness)
                height={54} // Set a fixed height (16 * 4 for responsiveness)
                className="object-contain" // Maintain aspect ratio
              />
            ) : (
              <IconComp className={iconstyle} />
            )}
            <div className="flex flex-col gap-2">
              <h1 className={`font-p_md tracking-wider text-left ${headingstyle}`}>
                {heading}
              </h1>
              <p className={`tracking-wider text-justify font-mont font-medium ${pstyle}`}>
                {para}
              </p>
            </div>
          </div>
        </div>
      ) : rowcol ? (
        <div
          className={`p-0 lg:p-5 flex flex-col items-start gap-3 ${divstyle}`}
        >
          <div className="flex gap-5 justify-center items-center">
            <IconComp className={iconstyle} />
            <h1 className={`font-p_sbold tracking-wider text-left ${headingstyle}`}>
              {heading}
            </h1>
          </div>
          <p className={`tracking-wider text-justify font-p_regular font-medium ${pstyle}`}>
            {para}
          </p>
        </div>
      ) : (
        <div className={`p-5 flex items-start gap-3 ${divstyle} w-72`}>
          {img ? (
            <Image
              src={img} // Image source
              alt={heading} // Alt text for accessibility
              width={54} // Set a fixed width (16 * 4 for responsiveness)
              height={54} // Set a fixed height (16 * 4 for responsiveness)
              className="object-contain fixedSizeofTechs"
            />
          ) : (
            <IconComp className={`${iconstyle} w-10 h-10 p-2 rounded-md object-contain`} />
          )}

          <h1 className={`font-p_md tracking-wider ${headingstyle}`}>
            {heading}
          </h1>
          <p className={`font-p_light tracking-wider ${pstyle}`}>{para}</p>
        </div>
      )}
    </>
  );
}

export default AdjustableCard;
