import { Component } from 'react';
import { Box, Typography, withStyles } from '@material-ui/core';
import logo from '../src/images/COVID19.jpg';
import Cards from '../src/components/Cards.jsx';
import { fetchData } from './service/api';
import Countries from '../src/components/Countries.jsx';
import Chart from './/components/Chart.jsx';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  header: {
    width: 400,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: '#F5F5F5',
    color: '#777'
  },
  lastUpdate: {
    color: '#777',
    fontSize: 12
  }
}

class App extends Component {

  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  }

  render() {

    const { data } = this.state;

    return (
      <Box className={this.props.classes.container}>
        <Box className={this.props.classes.header}>COVID-19 Corona Virus PANDEMIC</Box>
        <Typography className={this.props.classes.lastUpdate}>
          Last Updated: {data.lastUpdate && new Date(data.lastUpdate).toDateString()}
        </Typography>
        <img style={{ width: 350 }} src={logo} alt="covid" />
        <Cards data={data} />
        <Countries handleCountryChange={this.handleCountryChange} />
        <Chart data={data} />
      </Box>
    )
  }
}

export default withStyles(style)(App);