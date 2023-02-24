import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const AsideFilter = () => {
  return (
    <div className="w-full md:w-1/4 p-4">
      <h3 className="text-2xl font-bold mb-10">
        <strong>Filtrar Por</strong>
      </h3>
      <div className="flex flex-col  mb-4">
        <h3 className="flex gap-2">
          Category <MdOutlineKeyboardArrowDown />
        </h3>
        <h3 className="flex gap-2">
          Price <MdOutlineKeyboardArrowDown />
        </h3>
      </div>
    </div>
  );
};
export default AsideFilter;
