import React from "react"
import Highcharts from 'highcharts/highstock'
import ChartTheme from '../utilities/ChartTheme'
// import ReactHighcharts from 'react-highcharts';  //TODO DELETE REACT HIGHCHARTS?
// import $ from 'jquery'


export default class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      chart: null
    }
  }

  componentDidMount() {
    let config = this.setConfig()
    let chart = Highcharts.StockChart('chart', Object.assign(ChartTheme.main(), config))
    this.setState({chart})
  }

  setConfig() {
//HACK
    let data = [
      [[1430438400000,78.98],[1430697600000,78.81],[1430784000000,77.56],[1430870400000,78.1],[1430956800000,78.425],[1431043200000,78.51],[1431302400000,78.01],[1431388800000,77.46],[1431475200000,78.45],[1431561600000,81.37],[1431648000000,80.42],[1431907200000,80.88],[1431993600000,80.63],[1432080000000,80.55],[1432166400000,80.48],[1432252800000,80.54],[1432598400000,79.335],[1432684800000,80.55],[1432771200000,80.145],[1432857600000,79.19],[1433116800000,80.29],[1433203200000,80.445],[1433289600000,82.44],[1433376000000,82.05],[1433462400000,82.14],[1433721600000,80.67],[1433808000000,80.67],[1433894400000,82.16],[1433980800000,81.83],[1434067200000,81.53],[1434326400000,80.71],[1434412800000,81.06],[1434499200000,81.79],[1434585600000,82.905],[1434672000000,82.51],[1434931200000,84.74],[1435017600000,87.88],[1435104000000,88.86],[1435190400000,87.98],[1435276800000,88.01],[1435536000000,85.807],[1435622400000,85.765],[1435708800000,86.91],[1435795200000,87.285],[1436140800000,87.55],[1436227200000,87.22],[1436313600000,85.6401],[1436400000000,85.88],[1436486400000,87.95],[1436832000000,89.68],[1436918400000,89.76],[1437004800000,90.85],[1437091200000,94.97],[1437350400000,97.91],[1437436800000,98.39],[1437523200000,97.03],[1437609600000,95.43],[1437696000000,96.979],[1437955200000,94.17],[1438041600000,95.29],[1438128000000,96.99],[1438214400000,94.95],[1438300800000,94.01],[1438560000000,94.14],[1438646400000,94.06],[1438732800000,96.44],[1438819200000,95.12],[1438905600000,94.302],[1439164800000,94.15],[1439251200000,93.62],[1439337600000,94.19],[1439424000000,93.43],[1439510400000,94.42],[1439769600000,93.93],[1439856000000,95.17],[1439942400000,95.34],[1440028800000,90.56],[1440115200000,86.26],[1440374400000,82.48],[1440460800000,84.1148],[1440547200000,87.19],[1440633600000,89.73],[1440720000000,91.01],[1440979200000,89.43],[1441065600000,87.23],[1441152000000,89.89],[1441238400000,88.15],[1441324800000,88.26],[1441670400000,89.515],[1441756800000,90.44],[1441843200000,91.98],[1441929600000,92.05],[1442188800000,92.31],[1442275200000,92.9],[1442361600000,93.45],[1442448000000,94.34],[1442534400000,94.4],[1442793600000,95.55],[1442880000000,92.957],[1442966400000,93.97],[1443052800000,94.41],[1443139200000,92.77],[1443398400000,89.21],[1443484800000,86.67],[1443571200000,89.73],[1443657600000,90.95],[1443744000000,92.07],[1444003200000,93.995],[1444089600000,92.8],[1444176000000,92.4],[1444262400000,92.47],[1444348800000,93.24],[1444608000000,94.26],[1444694400000,94.12],[1444780800000,94.07],[1444867200000,95.96],[1444953600000,97.5395],[1445212800000,98.51],[1445299200000,97],[1445385600000,97.11],[1445472000000,99.67],[1445558400000,102.19],[1445817600000,103.77],[1445904000000,103.7],[1445990400000,104.2],[1446076800000,104.88],[1446163200000,102],[1446422400000,103.31],[1446508800000,102.58],[1446595200000,103.9998],[1446681600000,108.76],[1446768000000,107.107],[1447027200000,106.49],[1447113600000,107.91],[1447200000000,109.01],[1447286400000,108],[1447372800000,103.95],[1447632000000,104.04],[1447718400000,105.13],[1447804800000,107.77],[1447891200000,106.26],[1447977600000,107.32],[1448236800000,106.95],[1448323200000,105.74],[1448409600000,105.41],[1448582400000,105.45],[1448841600000,104.34],[1448928000000,107.0899],[1449014400000,106.07],[1449100800000,104.38],[1449187200000,106.18],[1449446400000,105.61],[1449532800000,106.49],[1449619200000,104.6],[1449705600000,105.42],[1449792000000,102.12],[1450051200000,104.66],[1450137600000,104.55],[1450224000000,106.79],[1450310400000,106.22],[1450396800000,104.04],[1450656000000,104.783],[1450742400000,105.51],[1450828800000,104.63],[1450915200000,105.02],[1451260800000,105.93],[1451347200000,107.26],[1451433600000,106.22],[1451520000000,104.66],[1451865600000,102.02],[1451952000000,102.73],[1452038400000,102.97],[1452124800000,97.92],[1452211200000,97.33],[1452470400000,97.5],[1452556800000,99.37],[1452643200000,95.44],[1452729600000,98.37],[1452816000000,94.88],[1453161600000,95.26],[1453248000000,94.35],[1453334400000,94.16],[1453420800000,97.94],[1453680000000,97.01],[1453766400000,97.34],[1453852800000,94.45],[1453939200000,109.11],[1454025600000,112.21],[1454284800000,115.03],[1454371200000,114.61],[1454457600000,112.69],[1454544000000,110.49],[1454630400000,104.069],[1454889600000,99.75],[1454976000000,99.54],[1455062400000,101],[1455148800000,101.91],[1455235200000,102.01],[1455580800000,101.5],[1455667200000,105.1992],[1455753600000,103.47],[1455840000000,104.57],[1456099200000,107.16],[1456185600000,105.46],[1456272000000,106.88],[1456358400000,108.07],[1456444800000,107.92],[1456704000000,106.92],[1456790400000,109.82],[1456876800000,109.95],[1456963200000,109.58],[1457049600000,108.39],[1457308800000,105.73],[1457395200000,105.93],[1457481600000,107.51],[1457568000000,107.32],[1457654400000,109.41],[1457913600000,109.89],[1458000000000,110.67],[1458086400000,112.18],[1458172800000,111.02],[1458259200000,111.45],[1458518400000,111.85],[1458604800000,112.25],[1458691200000,112.54],[1458777600000,113.05],[1459123200000,113.69],[1459209600000,116.14],[1459296000000,114.7],[1459382400000,114.1],[1459468800000,116.06],[1459728000000,112.55],[1459814400000,112.22],[1459900800000,113.71],[1459987200000,113.64],[1460073600000,110.63],[1460332800000,108.99],[1460419200000,110.61],[1460505600000,110.51],[1460592000000,110.84],[1460678400000,109.64],[1460937600000,110.45],[1461024000000,112.29],[1461110400000,112.42],[1461196800000,113.44],[1461283200000,110.56],[1461542400000,110.1],[1461628800000,108.76],[1461715200000,108.89],[1461801600000,116.73],[1461888000000,117.58],[1462147200000,118.57],[1462233600000,117.43],[1462320000000,118.06],[1462406400000,117.81],[1462492800000,119.49],[1462752000000,119.24],[1462838400000,120.5],[1462924800000,119.52],[1463011200000,120.28],[1463097600000,119.81],[1463356800000,118.67],[1463443200000,117.35],[1463529600000,117.65],[1463616000000,116.81],[1463702400000,117.35],[1463961600000,115.97],[1464048000000,117.7],[1464134400000,117.89],[1464220800000,119.47]],

    [[1430438400000,128.95],[1430697600000,128.7],[1430784000000,125.8],[1430870400000,125.01],[1430956800000,125.26],[1431043200000,127.62],[1431302400000,126.32],[1431388800000,125.865],[1431475200000,126.01],[1431561600000,128.95],[1431648000000,128.77],[1431907200000,130.19],[1431993600000,130.07],[1432080000000,130.06],[1432166400000,131.39],[1432252800000,132.54],[1432598400000,129.62],[1432684800000,132.045],[1432771200000,131.78],[1432857600000,130.28],[1433116800000,130.535],[1433203200000,129.96],[1433289600000,130.12],[1433376000000,129.36],[1433462400000,128.65],[1433721600000,127.8],[1433808000000,127.42],[1433894400000,128.88],[1433980800000,128.59],[1434067200000,127.17],[1434326400000,126.92],[1434412800000,127.6],[1434499200000,127.3],[1434585600000,127.88],[1434672000000,126.6],[1434931200000,127.61],[1435017600000,127.03],[1435104000000,128.11],[1435190400000,127.5],[1435276800000,126.75],[1435536000000,124.53],[1435622400000,125.425],[1435708800000,126.6],[1435795200000,126.44],[1436140800000,126],[1436227200000,125.69],[1436313600000,122.57],[1436400000000,120.07],[1436486400000,123.28],[1436745600000,125.66],[1436832000000,125.61],[1436918400000,126.82],[1437004800000,128.51],[1437091200000,129.62],[1437350400000,132.07],[1437436800000,130.75],[1437523200000,125.22],[1437609600000,125.16],[1437696000000,124.48],[1437955200000,122.89],[1438041600000,123.32],[1438128000000,122.99],[1438214400000,122.37],[1438300800000,121.46],[1438560000000,118.435],[1438646400000,114.64],[1438732800000,115.4],[1438819200000,115.17],[1438905600000,115.52],[1439164800000,119.6901],[1439251200000,113.5499],[1439337600000,115.24],[1439424000000,115.15],[1439510400000,116],[1439769600000,117.16],[1439856000000,116.5],[1439942400000,115.01],[1440028800000,112.65],[1440115200000,106.22],[1440374400000,103.623],[1440460800000,105.875],[1440547200000,109.625],[1440633600000,112.844],[1440720000000,113.28],[1440979200000,112.76],[1441065600000,107.96],[1441152000000,112.34],[1441238400000,110.37],[1441324800000,109.27],[1441670400000,112.21],[1441756800000,110.15],[1441843200000,112.57],[1441929600000,114.21],[1442188800000,115.3],[1442275200000,116.28],[1442361600000,116.35],[1442448000000,113.92],[1442534400000,113.45],[1442793600000,115.21],[1442880000000,113.432],[1442966400000,114.32],[1443052800000,115],[1443139200000,114.72],[1443398400000,112.44],[1443484800000,109.06],[1443571200000,109.95],[1443657600000,109.57],[1443744000000,110.38],[1444003200000,110.78],[1444089600000,111.31],[1444176000000,110.67],[1444262400000,109.5],[1444348800000,112.09],[1444608000000,111.6],[1444694400000,111.79],[1444780800000,110.21],[1444867200000,111.8],[1444953600000,111.04],[1445212800000,111.73],[1445299200000,113.78],[1445385600000,113.76],[1445472000000,115.47],[1445558400000,119.08],[1445817600000,115.21],[1445904000000,114.55],[1445990400000,119.28],[1446076800000,120.53],[1446163200000,119.5],[1446422400000,121.18],[1446508800000,122.57],[1446595200000,122],[1446681600000,120.92],[1446768000000,121.06],[1447027200000,120.57],[1447113600000,116.73],[1447200000000,116.12],[1447286400000,115.72],[1447372800000,112.34],[1447632000000,114.175],[1447718400000,113.69],[1447804800000,117.29],[1447891200000,118.78],[1447977600000,119.3],[1448236800000,117.76],[1448323200000,118.88],[1448409600000,118.03],[1448582400000,117.81],[1448841600000,118.35],[1448928000000,117.34],[1449014400000,116.28],[1449100800000,115.17],[1449187200000,119.03],[1449446400000,118.28],[1449532800000,118.23],[1449619200000,115.62],[1449705600000,116.17],[1449792000000,113.18],[1450051200000,112.48],[1450137600000,110.49],[1450224000000,111.338],[1450310400000,108.98],[1450396800000,105.9],[1450656000000,107.33],[1450742400000,107.23],[1450828800000,108.62],[1450915200000,108.03],[1451260800000,106.82],[1451347200000,108.74],[1451433600000,107.32],[1451520000000,105.26],[1451865600000,105.235],[1451952000000,102.714],[1452038400000,100.7],[1452124800000,96.45],[1452211200000,96.96],[1452470400000,98.53],[1452556800000,99.96],[1452643200000,97.371],[1452729600000,99.52],[1452816000000,97.02],[1453161600000,96.66],[1453248000000,96.826],[1453334400000,96.3],[1453420800000,101.42],[1453680000000,99.41],[1453766400000,99.99],[1453852800000,93.441],[1453939200000,94.09],[1454025600000,97.085],[1454284800000,96.43],[1454371200000,94.48],[1454457600000,96.35],[1454544000000,96.6],[1454630400000,94.02],[1454889600000,95.01],[1454976000000,94.99],[1455062400000,94.27],[1455148800000,93.7],[1455235200000,93.99],[1455580800000,96.555],[1455667200000,98.12],[1455753600000,96.26],[1455840000000,96.04],[1456099200000,96.8708],[1456185600000,94.69],[1456272000000,96.1],[1456358400000,96.76],[1456444800000,96.91],[1456704000000,96.69],[1456790400000,100.53],[1456876800000,100.75],[1456963200000,101.5],[1457049600000,103.01],[1457308800000,101.87],[1457395200000,101.03],[1457481600000,101.12],[1457568000000,101.17],[1457654400000,102.23],[1457913600000,102.52],[1458000000000,104.58],[1458086400000,105.97],[1458172800000,105.8],[1458259200000,105.92],[1458518400000,105.91],[1458604800000,106.72],[1458691200000,106.13],[1458777600000,105.67],[1459123200000,105.19],[1459209600000,107.7],[1459296000000,109.56],[1459382400000,108.99],[1459468800000,109.99],[1459728000000,111.08],[1459814400000,109.81],[1459900800000,110.96],[1459987200000,108.54],[1460073600000,108.66],[1460332800000,109.04],[1460419200000,110.44],[1460505600000,112.0192],[1460592000000,112.1],[1460678400000,109.85],[1460937600000,107.48],[1461024000000,106.91],[1461110400000,107.13],[1461196800000,105.97],[1461283200000,105.68],[1461542400000,105.08],[1461628800000,104.35],[1461715200000,97.82],[1461801600000,94.8075],[1461888000000,93.75],[1462147200000,93.65],[1462233600000,95.18],[1462320000000,94.19],[1462406400000,93.24],[1462492800000,92.72],[1462752000000,92.82],[1462838400000,93.39],[1462924800000,92.51],[1463011200000,90.32],[1463097600000,90.52],[1463356800000,93.88],[1463443200000,93.49],[1463529600000,94.56],[1463616000000,94.2],[1463702400000,95.22],[1463961600000,96.43],[1464048000000,97.9],[1464134400000,99.62],[1464220800000,100.41]]
  ]
    ;
    let rangeTheme = ChartTheme.rangeSelectorTheme()
    let config = {
      rangeSelector: Object.assign(rangeTheme, {
        selected: 4
      }),
      title: {
        text: 'Closing Stock Prices',
        style: {
           color: '#E0E0E3',
           fontSize: '20px'
        }
      },
      series: [
        {name: ['AAPL'],
        data: data[0]},
        {name: ['GOOG'],
        data: data[1]},
      {  tooltip: {
          valueDecimals: 2
        }}
      ]
    }
    return config
  }

  render() {

    return(
      <div>
        <div id="chart"></div>
      </div>
    )
  }
}
