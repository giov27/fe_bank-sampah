import type { ReactElement } from 'react';
import { Grid, Box, Link } from '@mui/material';
import PageContainer from '../src/components/container/PageContainer';

// components

import BlankLayout from '@/layouts/blank/BlankLayout';
export default function Home() {
  return (
    <PageContainer title="Landing Page" description="this is Landing Page">
      <h1>Landing Page</h1>
      <Link href="/login" underline="none" fontSize={"40px"}>
        Login
      </Link>
    </PageContainer>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BlankLayout>{page}</BlankLayout>;
};
