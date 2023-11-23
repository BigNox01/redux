import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import InputField from "../buttons/logos/inputfield";

export default function PopupCard({ handleClosePopup }) {
 return (
   <Card variant="outlined" sx={{ width: 320 }}>
     <CardOverflow>
       <AspectRatio ratio="2">
         <img
           src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
           srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
           loading="lazy"
           alt=""
         />
       </AspectRatio>
     </CardOverflow>
     <CardContent>
       <Typography level="title-md">
        <InputField>
        </InputField>
       </Typography>
       <Typography level="body-sm">California</Typography>
     </CardContent>
     <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
       <Divider inset="context" />
       <CardContent orientation="horizontal">
         <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
           Priority
         </Typography>
         <Divider orientation="vertical" />
         <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
           Added:1 hour ago
         </Typography>
       </CardContent>
     </CardOverflow>
   </Card>
 );
}
