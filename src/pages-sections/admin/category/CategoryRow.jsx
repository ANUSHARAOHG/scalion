import { useState } from "react";
import { Avatar } from "@mui/material";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import BazaarSwitch from "components/BazaarSwitch";
import { StyledTableRow, CategoryWrapper, StyledIconButton, StyledTableCell } from "../StyledComponents";
import { useRouter } from "next/router";

// ========================================================================

// ========================================================================

const CategoryRow = ({
  item,
  selected
}) => {
  const {
    image,
    name,
    level,
    featured,
    id,
    slug
  } = item;
  const router = useRouter();
  const [featuredCategory, setFeaturedCategory] = useState(featured);
  const isItemSelected = selected.indexOf(name) !== -1;
  const handleNavigate = () => router.push(`/admin/categories/${slug}`);
  return <StyledTableRow tabIndex={-1} role="checkbox" selected={isItemSelected}>
      <StyledTableCell align="left">#{id.split("-")[0]}</StyledTableCell>

      {/* <StyledTableCell align="left">
        <CategoryWrapper>{name}</CategoryWrapper>
      </StyledTableCell> */}
    
      <StyledTableCell align="left">
        
      </StyledTableCell>
      <StyledTableCell align="left">
        <CategoryWrapper>OID2163</CategoryWrapper>
      </StyledTableCell>
      <StyledTableCell align="left">250.00 gm</StyledTableCell>

      <StyledTableCell align="left">
      Standard
      </StyledTableCell>
      <StyledTableCell align="left">
      Sat, Jan 21, 2023
1:18 PM
      </StyledTableCell>

      <StyledTableCell align="left">
      Delivered
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={handleNavigate}>
          <Edit />
        </StyledIconButton>

       

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
};
export default CategoryRow;