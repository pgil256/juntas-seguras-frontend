// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const WeeklyOverview = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug'],
      tickPlacement: 'on',
      labels: { show: true },
      axisTicks: { show: true },
      axisBorder: { show: true }
    },
    yaxis: {
      show: true,
      tickAmount: 5,
      max: 1000,
      labels: {
        offsetX: -15, 
        formatter: value => {
          return value > 999 ? `$${(value / 1000).toFixed(1)}k` : `$${value}`
        }
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title='Annual Overview'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts
          type='bar'
          height={205}
          options={options}
          series={[{ data: [400, 500, 600, 700, 800, 900, 1000, 0, 100, 200, 300, 400] }]}
        />
        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            90%
          </Typography>
          <Typography variant='body2'>You have 90% 😎 early payments this cycle.</Typography>
        </Box>
        <Button fullWidth variant='contained'>
          Make Deposit
        </Button>
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
