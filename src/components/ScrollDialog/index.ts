import { Dialog } from 'fbm-ui';
import styled from '@mui/styles/styled';

const ScrollDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    '& .MuiBox-root>.MuiBox-root:nth-of-type(2)': {
      maxHeight: 'calc(100vh - 150px)',
      overflow: 'auto',
    },
  },
});

export default ScrollDialog;
