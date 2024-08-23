
interface WithSelectInputWrapperProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
}

const WithSelectInputWrapper = (Component: any) => {
  return function (props: WithSelectInputWrapperProps) {
    return <Component {...props} />;
  };
};
export default WithSelectInputWrapper;
