import Header from "./components/header/Header";
import { Stack } from "@mui/material";
import CustomizedInputBase from "./components/textBox/TextBox";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <Stack component={'div'} sx={{backgroundColor:'black',minHeight:'100vh'}}>
       <Header/>
       <CustomizedInputBase/>
       <Footer/>
    </Stack>
  );
}
