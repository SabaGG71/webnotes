interface titleType {
  title: string;
  width?: number;
}

const SectionTitle = ({ title, width }: titleType) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <h3 className="text-2xl tracking-wide font-bold upper-case text-[#333] text-center mt-16 max-sm:text-xl">
        {title}
      </h3>
      <div
        style={{ width: `${width}px` }}
        className="h-[4px] rounded-full bg-gradient-to-l from-primary-500 to-primary-300"
      ></div>
    </div>
  );
};

export default SectionTitle;
