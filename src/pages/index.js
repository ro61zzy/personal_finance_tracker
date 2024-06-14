// Home.js
import { Box, Grid, Typography } from "@mui/material";
import AccountCard from "@/components/AccountCard";
import SpendPieChart from "@/components/SpendPieChart";
import MyAccountsCard from "@/components/MyAccountsCard";
import IncomeForm from "@/components/IncomeForm";
import Expense from "@/components/Expense";

export default function Home() {
  return (
    <Box>
      <Typography sx={{
        textAlign:"center",
        fontSize:"30px"
      }}>My Spendy Tracker</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:{xl:"10px", sm:"20px"}
        }}
      >
        <Box
          sx={{
            backgroundColor: "#450202",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "5px 5px",
            }}
          >
            <Grid item xs={12} sm={4}>
              <AccountCard />
            </Grid>
            <Grid item xs={12} sm={8}>
              <SpendPieChart />
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "5px 5px",
            }}
          >
            <Grid item xs={12} sm={4}>
              <MyAccountsCard />
            </Grid>
            <Grid item xs={12} sm={4}>
              <IncomeForm />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Expense />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
