interface Props {
  title: string;
}

const SectionTitle = ({ title }: Props) => {
  return (
    <h2 className="font-titleFont text-4xl font-semibold flex items-center">
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-skyblue ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
