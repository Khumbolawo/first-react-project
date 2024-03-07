import { ReactNode } from "react";
//component of the app that is a bootstrap alert widget
//ReactNode child lets you pass any type of data into the component
interface AlertProps {
  children: ReactNode;
}

const Alert = ({ children }: AlertProps) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
