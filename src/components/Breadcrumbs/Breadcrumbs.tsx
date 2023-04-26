import { Breadcrumbs as MaterialCrumbs } from "@material-tailwind/react";
interface IBreadProps {
    children: JSX.Element | JSX.Element[];
}

const Breadcrumbs = ({ children }: IBreadProps) => {
    return (
        <MaterialCrumbs
            className="mx-0 px-0 my-4 bg-transparent md:my-6"
            fullWidth
            separator=">"
        >
            {children}
        </MaterialCrumbs>
    );
};

export default Breadcrumbs;