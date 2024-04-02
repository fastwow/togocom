import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
} from "@mui/material";
import api from "./api";

const Admin = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await api.getAllData();
      setData(response);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        // full screen
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
      }}
    >
      <Container fixed sx={{}}>
        <Box
          sx={{
            fontSize: 36,
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            lineHeight: "64px",
            paddingLeft: 4,
            paddingRight: 4,
            marginTop: 4,
          }}
        >
          Admin
        </Box>
        <TableContainer
          component={Paper}
          sx={{ marginTop: 4, marginBottom: 4 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Prize</TableCell>
                <TableCell>Phone Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>
                    {row.prizes.map((prize, index) => (
                      <span key={index}>
                        {prize.title}
                        <br />
                      </span>
                    ))}
                  </TableCell>
                  <TableCell>
                    {row.winners.map((winner, index) => (
                      <span key={index}>
                        {winner}
                        <br />
                      </span>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Admin;
