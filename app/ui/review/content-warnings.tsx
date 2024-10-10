'use client';
import React, { Fragment, useState } from 'react';

export default function ContentWarnings({
  contentWarnings,
}: {
  contentWarnings: Array<string>;
}) {
  const [blurredContentWarnings, setBlurredContentWarnings] = useState(true);
  return (
    <Fragment>
      {blurredContentWarnings && (
        <button
          className="absolute z-10 cursor-pointer"
          onClick={() => setBlurredContentWarnings(false)}
        >
          Click to see.
        </button>
      )}
      <button
        className={`flex gap-1 relative ${blurredContentWarnings && 'blur-[6px] cursor-pointer'}`}
        onClick={
          blurredContentWarnings
            ? () => setBlurredContentWarnings(false)
            : undefined
        }
      >
        {contentWarnings.map((trigger: string, index: number) => (
          <div key={index} className="bg-white rounded-lg w-fit px-2">
            {trigger}
          </div>
        ))}
      </button>
    </Fragment>
  );
}
