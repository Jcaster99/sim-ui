import { Box,Image } from "theme-ui"
import { SideNav } from "../SideNav"



export const HeaderMobile : React.FC = () =>{


return (
<>
<Box p={20} sx={{display:['flex', 'none'],width: '100%', justifyContent: 'space-between', alignItems: 'center', height: '92px'}}>
<Image src="./icons/logo.svg" sx={{ width: 55, heigh: 52 }} />
<SideNav/>
</Box>

</>
)}