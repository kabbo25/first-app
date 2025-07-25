import Link from "next/link";
import CustomLink from "@/app/component/CustomLink";

const DashboardLayout = ({children}) => {
    return (
        <>
            <ul className={'flex gap-5 p-4'}>
                <CustomLink path={'/dashboard'}>Home</CustomLink>
                <CustomLink path={'/dashboard/contact'}>Contact</CustomLink>
                <CustomLink path={'/dashboard/about'} preFetch={true}>About</CustomLink>
                <CustomLink path={'/dashboard/analytics'}>Analytics</CustomLink>
            </ul>

            {children}
        </>
    )
}
export default DashboardLayout;
