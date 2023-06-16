import type { ReactElement } from 'react';
import FullLayout from "../src/layouts/full/FullLayout";
import PageContainer from '../src/components/container/PageContainer';
import { Box, Grid } from '@mui/material';
import GarbageTable from '../src/components/garbage/GarbageTable';

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