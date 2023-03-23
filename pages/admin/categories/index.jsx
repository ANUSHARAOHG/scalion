import Router from "next/router";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import Search from "components/dashboard/SearchCategory";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import { H3 } from "components/Typography";
import useMuiTable from "hooks/useMuiTable";
import Scrollbar from "components/Scrollbar";
import { CategoryRow } from "pages-sections/admin";
import api from "utils/__api__/dashboard";

// TABLE HEADING DATA LIST
const tableHeading = [{
//   Tracking number
// Service
// Order Id
// Weight
// Price
// Created on
// Tracking status

  id: "id",
  label: "Tracking number",
  align: "left"
},
{
  id: "image",
  label: "Service",
  align: "left"
}, 
 {
  id: "id",
  label: "Order ID",
  align: "left"
}, 
{
  id: "level",
  label: "Weight",
  align: "left"
}, 
{
  id: "level",
  label: "Price",
  align: "left"
},
{
  id: "level",
  label: "Created On",
  align: "left"
},
{
  id: "featured",
  label: "Status",
  align: "left"
}, 
{
  id: "action",
  label: "Action",
  align: "center"
}];

// =============================================================================
CategoryList.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function CategoryList(props) {
  const {
    categories
  } = props;

  // RESHAPE THE PRODUCT LIST BASED TABLE HEAD CELL ID
  const filteredCategories = categories.map(item => ({
    id: item.id,
    name: item.name,
    slug: item.slug,
    image: item.image,
    featured: item.featured,
    level: Math.ceil(Math.random() * 1)
  }));
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: filteredCategories
  });
  return <Box py={4}>
      <H3 mb={2}>Shipments</H3>

      <Search  searchPlaceholder="Search by Tracking number..."/>
      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 900
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={categories.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map(category => <CategoryRow item={category} key={category.id} selected={selected} />)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(categories.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
}
export const getStaticProps = async () => {
  const categories = await api.category();
  return {
    props: {
      categories
    }
  };
};