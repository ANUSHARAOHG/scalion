import { Add } from "@mui/icons-material";
import { Button, useMediaQuery,styled } from "@mui/material";
import { FlexBox } from "components/flex-box";
import SearchInput from "components/SearchInput";


// ===============================================================

// ===============================================================

const SearchArea = props => {
  const {
    searchPlaceholder,
    handleBtnClick
  } = props;
  const downSM = useMediaQuery(theme => theme.breakpoints.down("sm"));
  return <FlexBox mb={2} gap={2} justifyContent="space-between" flexWrap="wrap">
      <SearchInput placeholder={searchPlaceholder} />

     
    </FlexBox>;
};
SearchArea.defaultProps = {
  searchPlaceholder: "Search Product..."
};
export default SearchArea;