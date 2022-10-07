import { Box } from "@mui/material";
import { Header } from "../components/utilities/Headers";
import { IComponent } from '../components/utilities/Interfaces';

const Ido: React.FC<IComponent> = (props) => {
  return <Box sx={{width: '70%', display: 'flex', alignItems: 'center'}}>
      <Header
          title="All about the IDO"
          subtitle='Provide a platform for your users via Spreadly and earn rewards for the revenue you generate.'
          button="Join the IDO"
      />
      
  </Box>
}

export default Ido;
