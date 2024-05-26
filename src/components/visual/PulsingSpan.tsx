"use client";

export type PulsingSpanProps = {
  text: string;
  color?: string;
};

const PulsingSpan = ({ text, color }: PulsingSpanProps) => {
  return (
    <span className={`${color ? color : "text-cyan-400"} animate-pulse`}>
      {text}
    </span>
  );
};

export default PulsingSpan;
