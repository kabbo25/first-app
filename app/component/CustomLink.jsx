'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";



const CustomLink = ({path,children,preFetch= false}) => {
    const currentPath = usePathname();
    console.log(currentPath);
    const textColor = currentPath === path ? 'text-blue-500' : 'text-white';
    return (
       <Link className={textColor} href={path} prefetch={preFetch}>{children}</Link>
    )
}
export default CustomLink;
