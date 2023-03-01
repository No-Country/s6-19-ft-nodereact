import { Button } from "@mui/material";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { reset, selectFilter } from "../../redux/slices/filterSlice";
import CheckboxCategory from "./CheckboxComponents/CheckboxCategory";
import CheckboxPrice from "./CheckboxComponents/CheckboxPrice";

const categories = ["YOGA", "TRAINING", "NUTRITION"];

const prices = ["1000", "1500", "2000", "3000", "4000"];

const AsideFilter = () => {
  const dispatch = useDispatch();

  const filters = useSelector(selectFilter);

  console.log("esto es filter", filters);

  return (
    <div className="w-full md:w-1/4 p-4">
      <h3 className="text-2xl font-bold mb-10">
        <strong>Filtrar Por</strong>
      </h3>
      <div className="flex w-full  flex-col  mb-4">
        <CheckboxCategory items={categories} />
        <CheckboxPrice items={prices} />
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};
export default AsideFilter;
