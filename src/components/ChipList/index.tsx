import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles'
import clsx from 'clsx'

import {
  Theme,
  Chip,
  Paper,
  Tabs
} from '@mui/material'

interface ChipData {
  key: number;
  label: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      justifyContent: 'center',
      border: '1px solid #313131',
      padding: theme.spacing(2),
      position: 'fixed',
      width: '100%',
      top: '56px',
      zIndex: 1,
    },
    chip: {
      margin: `0 ${theme.spacing(1)}`
    },
    active: {
      background: theme.palette.common.white,
      color: theme.palette.common.black
    },
    tabs: {
      minHeight: 'unset',
      '& .MuiTabs-indicator': {
        backgroundColor: 'unset'
      }
    }
  })
)

export default function ChipsArray() {
  const classes = useStyles()

  const [activeChip] = React.useState(0)

  const [chipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'All' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'Angular' },
    { key: 6, label: 'jQuery' },
    { key: 7, label: 'Polymer' },
    { key: 8, label: 'React' },
    { key: 9, label: 'Vue.js' },
    { key: 10, label: 'Angular' },
  ])

  return (
    <Paper className={classes.paper}>
      <Tabs
        value={0}
        onChange={() => {}}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        className={classes.tabs}
      >
        {chipData.map((data) => (
          <Chip
            className={ 
              clsx(classes.chip, data.key === activeChip && (classes.active))
            }
            key={data.key}
            label={data.label}
          />
        ))}
      </Tabs>
    </Paper>
  );
}