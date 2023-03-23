import { Box, Grid } from "@mui/material";
import Card1 from "pages-sections/dashboard/Card1";
import Section3 from "pages-sections/dashboard/Section3";
import WishCard from "pages-sections/dashboard/WishCard";
import Analytics from "pages-sections/dashboard/Analytics";
import RecentPurchase from "pages-sections/dashboard/RecentPurchase";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import StockOutProducts from "pages-sections/dashboard/StockOutProducts";
import api from "utils/__api__/dashboard";

// =============================================================================
VendorDashboard.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function VendorDashboard(props) {
  const {
    cardList,
    recentPurchase,
    stockOutProducts
  } = props;
  return <Box py={4}>
      <Grid container spacing={3}>
        {/* WISHING CARD */}
        <Grid item md={6} xs={12}>
          <WishCard />
        </Grid>

       

        {/* STOCK OUT PRODUCTS */}
        <Grid item md={5} xs={12}>
          <StockOutProducts data={stockOutProducts} />
        </Grid>
      </Grid>
    </Box>;
}
export const getStaticProps = async () => {
  const cardList = await api.getAllCard();
  const recentPurchase = await api.recentPurchase();
  const stockOutProducts = await api.stockOutProducts();
  return {
    props: {
      cardList,
      recentPurchase,
      stockOutProducts
    }
  };
};