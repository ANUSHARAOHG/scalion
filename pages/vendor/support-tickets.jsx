import { Delete, Edit } from "@mui/icons-material";
import { Box, Card, Stack, Table, TableContainer } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableHeader from "components/data-table/TableHeader";
import TablePagination from "components/data-table/TablePagination";
import VendorDashboardLayout from "components/layouts/vendor-dashboard";
import Scrollbar from "components/Scrollbar";
import SearchInput from "components/SearchInput";
import useMuiTable from "hooks/useMuiTable";
import { StatusWrapper, StyledTableRow, StyledTableCell, StyledIconButton } from "pages-sections/admin";
import api from "utils/__api__/ticket";
import { H3, H4, H5 } from "components/Typography";
const tableHeading = [{
  id: "title",
  label: "Id",
  align: "left"
}, {
  id: "category",
  label: "Order id",
  align: "left"
}, {
  id: "date",
  label: "Created Date",
  align: "left"
}, {
  id: "type",
  label: "Agent",
  align: "left"
}, {
  id: "status",
  label: "Status",
  align: "center"
}];

// =============================================================================
SupportTickets.getLayout = function getLayout(page) {
  return <VendorDashboardLayout>{page}</VendorDashboardLayout>;
};
// =============================================================================

// =============================================================================

export default function SupportTickets({
  ticketList
}) {
  const {
    order,
    orderBy,
    selected,
    rowsPerPage,
    filteredList,
    handleChangePage,
    handleRequestSort
  } = useMuiTable({
    listData: ticketList,
    defaultSort: "date"
  });
  return <Box py={4}>
     <H3 mb={2}> Tickets</H3>
      <SearchInput placeholder="Search Ticket.." sx={{
      mb: 4
    }} />

      <Card>
        <Scrollbar>
          <TableContainer sx={{
          minWidth: 800
        }}>
            <Table>
              <TableHeader order={order} hideSelectBtn orderBy={orderBy} heading={tableHeading} rowCount={ticketList.length} numSelected={selected.length} onRequestSort={handleRequestSort} />

              <TableBody>
                {filteredList.map((ticket, index) => <StyledTableRow role="checkbox" key={index}>
                    <StyledTableCell align="left">
                      {ticket.title}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {/* <StatusWrapper status={ticket.type}> */}
                        {ticket.category}
                      {/* </StatusWrapper> */}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      {ticket.date}
                    </StyledTableCell>
                    
                    <StyledTableCell align="left">
                      {ticket.type}
                    </StyledTableCell>

                    <StyledTableCell align="left">
                      <StatusWrapper status={ticket.status}>
                        {ticket.status}
                      </StatusWrapper>
                    </StyledTableCell>

                    {/* <StyledTableCell align="center">
                      <StyledIconButton>
                        <Edit />
                      </StyledIconButton>
                      <StyledIconButton>
                        <Delete />
                      </StyledIconButton>
                    </StyledTableCell> */}
                  </StyledTableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <Stack alignItems="center" my={4}>
          <TablePagination onChange={handleChangePage} count={Math.ceil(ticketList.length / rowsPerPage)} />
        </Stack>
      </Card>
    </Box>;
}
export const getStaticProps = async () => {
  const ticketList = await api.getTicketList();
  return {
    props: {
      ticketList
    }
  };
};