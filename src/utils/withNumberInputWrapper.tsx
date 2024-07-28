

interface WithNumberInputWrapperProps {
  value?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const withNumberInputWrapper = (Component: any) => {
  return function (props: WithNumberInputWrapperProps) {
    return <Component {...props} />;
  };
};
export default withNumberInputWrapper;