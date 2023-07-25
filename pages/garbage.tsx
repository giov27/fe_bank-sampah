import type { ReactElement } from 'react';
import FullLayout from "@/layouts/full/FullLayout";
import PageContainer from '@/components/container/PageContainer';
import { Box, Grid } from '@mui/material';
import GarbageTable from '@/features/garbage/components/GarbageTable';

const Garbage = () => {
  return (
    <>
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box>
          <Grid item >
            <GarbageTable />
          </Grid>
        </Box>
      </PageContainer>
    </>
  )
}

export default Garbage;
Garbage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
