interface SectionTitleProps {
  title: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p
        className={`
          text-sm
          font-medium
          uppercase
          tracking-[0.3em]
          text-[#06B6D4]
          ${align === "center" ? "text-center" : "text-left"}
        `}
      >
        {title}
      </p>
    </div>
  );
}