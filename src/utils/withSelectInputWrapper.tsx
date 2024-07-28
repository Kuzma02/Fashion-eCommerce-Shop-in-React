import React from "react";

interface WithSelectInputWrapperProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
}

const withSelectInputWrapper = (Component: any) => {
  return function (props: WithSelectInputWrapperProps) {
    return <Component {...props} />;
  };
};
export default withSelectInputWrapper;
