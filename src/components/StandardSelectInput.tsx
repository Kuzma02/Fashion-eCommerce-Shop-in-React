import { nanoid } from "nanoid";

interface ISelectElement {
  id: number;
  value: string;
}

const StandardSelectInput = ({
  selectList,
  ...props
}: {
  selectList: ISelectElement[];
}) => {
  return (
    <select
      className="w-full py-2 border-black/30 border text-black/70 outline-none"
      {...props}
    >
      {selectList &&
        selectList.map((element: ISelectElement) => (
          <option key={nanoid()} value={element.id}>
            {element.value}
          </option>
        ))}
    </select>
  );
};
export default StandardSelectInput;
