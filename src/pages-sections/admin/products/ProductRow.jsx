import { useState } from "react";
import { useRouter } from "next/router";
import { Delete, Edit, RemoveRedEye } from "@mui/icons-material";
import { Avatar, Box } from "@mui/material";
import { FlexBox } from "components/flex-box";
import BazaarSwitch from "components/BazaarSwitch";
import { Paragraph, Small } from "components/Typography";
import { currency } from "lib";
import { StyledTableRow, CategoryWrapper, StyledTableCell, StyledIconButton } from "../StyledComponents";

// ========================================================================

// ========================================================================

const ProductRow = ({
  product
}) => {
  const {
    category,
    name,
    price,
    image,
    brand,
    id,
    published,
    slug
  } = product;
  const router = useRouter();
  const [productPulish, setProductPublish] = useState(published);
  return <StyledTableRow tabIndex={-1} role="checkbox">
      <StyledTableCell align="left">
        <FlexBox alignItems="center" gap={1.5}>
          <Avatar src="https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/6385b61a511fe80ffa5a2783/webp/safal-ricepercent20branpercent20oil-1percent20ltrpercent20sac-100x100.jpg" sx={{
          borderRadius: "8px"
        }} />
          <Box>
            <Paragraph>SAFAL RICE BRAN OIL 1 LITRE SACHET</Paragraph>
            {/* <Small color="grey.600">#{id.split("-")[0]}</Small> */}
          </Box>
        </FlexBox>
      </StyledTableCell>

      {/* <StyledTableCell align="left">
        <CategoryWrapper>{category}</CategoryWrapper>
      </StyledTableCell> */}

      {/* <StyledTableCell align="left">
        <Avatar src={brand} sx={{
        width: 55,
        height: "auto",
        borderRadius: 0
      }} />
      </StyledTableCell> */}

      <StyledTableCell align="left">150</StyledTableCell>

      <StyledTableCell align="left">
        <BazaarSwitch color="info" checked={productPulish} onChange={() => setProductPublish(state => !state)} />
      </StyledTableCell>

      <StyledTableCell align="center">
        <StyledIconButton onClick={() => router.push(`/admin/products/${slug}`)}>
          <Edit />
        </StyledIconButton>

        <StyledIconButton>
          <RemoveRedEye />
        </StyledIconButton>

        <StyledIconButton>
          <Delete />
        </StyledIconButton>
      </StyledTableCell>
    </StyledTableRow>;
};
export default ProductRow;