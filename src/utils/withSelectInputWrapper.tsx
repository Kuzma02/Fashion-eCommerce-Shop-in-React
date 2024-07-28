import { useState } from "react";

const withSelectInputWrapper = (Component: any) => {
  return function (props: any) {
    const [selectValue, setSelectValue] = useState<string>(
      props.selectList[0].value
    );
    return (
      <Component
        value={selectValue}
        {...props}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectValue((prev: string) => e.target.value)
        }
      />
    );
  };
};
export default withSelectInputWrapper;
