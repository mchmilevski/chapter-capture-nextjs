import React from 'react';

export default function Quote({ text }: { text: string }) {
  return (
    <div className="border-l-4 border-lavender mb-4 last:mb-0">
      <p className="pl-2 text-lg">{text}</p>
    </div>
  );
}
