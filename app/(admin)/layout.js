


export default function DashboardLayout({children}){
    return (
       <>
           <div>
               <ul className={'flex gap-5 p-4'}>
                   <li>contact</li>
                   <li>Home</li>
               </ul>
           </div>
           {children}
       </>
    )
}
