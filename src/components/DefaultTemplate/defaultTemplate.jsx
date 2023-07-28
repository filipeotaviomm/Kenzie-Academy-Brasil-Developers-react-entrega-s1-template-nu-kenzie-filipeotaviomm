import { Header } from "../Header/header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
