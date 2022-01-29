import * as React from 'react';
import { createStyles, makeStyles } from '@mui/styles'

import {
  Theme,
  Chip,
  Paper
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
      padding: theme.spacing(2)
    },
    chip: {
      margin: `0 ${theme.spacing(1)}`
    }
  })
)

export default function ChipsArray() {
  const classes = useStyles()

  const [chipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: 'Angular' },
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
      {chipData.map((data) => (
        <Chip
          className={classes.chip}
          key={data.key}
          label={data.label}
        />
      ))}
    </Paper>
  );
}