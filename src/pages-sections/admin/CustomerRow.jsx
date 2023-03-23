import Router from "next/router";
import { Delete, Edit } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
import { StyledIconButton, StyledTableCell, StyledTableRow } from "./StyledComponents";
import BazaarSwitch from "components/BazaarSwitch";
import { currency } from "lib";

// ========================================================================

// ========================================================================

const CustomerRow = ({
  customer
}) => {
  const {
    email,
    name,
    phone,
    avatar,
    balance,
    published,
    orders
  } = customer;
  const router = useRouter();
  const [storePublish, setStorePublish] = useState(published);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {name}
      </StyledTableCell>
      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {email}
      
      </StyledTableCell>
      
      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
       {phone}
      </StyledTableCell>

      

      {/* <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
        {currency(balance)}
      </StyledTableCell> */}

      <StyledTableCell align="left" sx={{
      fontWeight: 400
    }}>
         <BazaarSwitch color="info" checked={storePublish} onChange={() => setStorePublish(state => !state)} />
      </StyledTableCell>

      <StyledTableCell align="center">
      <StyledIconButton onClick={() => Router.push("/vendor/account-setting")}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
};
export default CustomerRow;