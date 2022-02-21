import { PropsWithChildren } from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { Box } from '@mui/material';
import { matchPath, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import links from '../../constants/links';
import InstructionsBar from '../InstructionsBar';
import { FOOTER_HEIGHT } from '../Footer/Footer';


const MainContent = styled(Box)`
  display: flex;
  overflow: scroll;
  min-height: calc(100vh - ${FOOTER_HEIGHT}px - 30px);
`

type TLayout = PropsWithChildren<{
  onFooterClick: () => void;
}>;

function Layout({ children, onFooterClick }: TLayout) {
  const location = useLocation();
  const isPolicyHolderPath = !!matchPath(
    location.pathname,
    '/policyholders'
  )
  return (
    <>
      <MainContent
      >
        <NavBar links={links} />
        <Box
          sx={{
            margin: '0 auto',
            maxWidth: '750px',
            padding: '48px 16px',
          }}
        >
          {children}
          {isPolicyHolderPath ? <></> : <InstructionsBar onClick={onFooterClick} />}
        </Box>
      </MainContent>
      <Footer />
    </>
  );
}

export default Layout;
