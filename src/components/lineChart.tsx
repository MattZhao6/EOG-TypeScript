import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts';
// import CharTooltip from "./CharTooltip"
import { IState } from '../store';

const getMultipleMeasurements = (state: IState) => {
    console.log('this is state from mulitpleMeasurement', state.multipleMeasurements);
    // const { flareTemp, waterTemp, casingPressure, oilTemp, tubingPressure, injValveOpen } = state.multipleMeasurements;
    return {
      // flareTemp, waterTemp, casingPressure, oilTemp, tubingPressure, injValveOpen,
    };
  };


const useStyles = makeStyles({
    container: {
        height: '83vh',
        minWidth: '1000px',
    },
  });
// const Chart = () =>{
//     // const styles = useStyles();
//     // const [charData, setData] = useState([])
//     // //chagne the data format to the recharts format
//     // //loop throught all the data
//     // useEffect(() => {
//     //     let tempArray = []
//     //     props.flareTemp.forEach((item,index)=>{
//     //         let tempSingleData = {
//     //             name: item.at,
//     //             flareTemp : item.value,
//     //             waterTemp :props.waterTemp[index].value,
//     //             casingPressure : props.casingPressure[index].value,
//     //             oilTemp : props.oilTemp[index].value,
//     //             tubingPressure : props.tubingPressure[index].value,
//     //             injValveOpen : props.injValveOpen[index].value,
//     //         }
//     //         tempArray.push(tempSingleData)
//     //     })
//     //     setData(tempArray)
//     // }, [props.injValveOpen])
//     // const handleOnClick = () =>{ //add one to the counter 
//     //     props.addSavedStatus()
//     // }
//     // return (
//     //     <div className={styles.container} onClick={handleOnClick} >
//     //         <ResponsiveContainer width="100%" height="100%">
//     //             <LineChart data={charData}>
//     //             <YAxis label={{ angle: -90, value: 'values', position: 'insideLeft' }} />
//     //             <XAxis dataKey="name" tickFormatter={(name)=>new Date(name).toLocaleTimeString()} interval="preserveStartEnd" minTickGap={25} />
//     //             <Tooltip content={<CharTooltip charData={charData} />}/>
//     //             <CartesianGrid  strokeDasharray="5 5" />
//     //             <Legend />
//     //             <Line style={{display: props.flareTempBtn? "":"none"}} type="monotone" dot={false} key="flareTemp" dataKey="flareTemp" stroke="#FF8C00" />
//     //             <Line style={{display: props.waterTempBtn? "":"none"}} type="monotone" dot={false} key="waterTemp" dataKey="waterTemp" stroke="#9932CC" />
//     //             <Line style={{display: props.casingPressureBtn? "":"none"}} type="monotone" dot={false} key="casingPressure" dataKey="casingPressure" stroke="#8FBC8F" />
//     //             <Line style={{display: props.oilTempBtn? "":"none"}} type="monotone" dot={false} key="oilTemp" dataKey="oilTemp" stroke="#00CED1" />
//     //             <Line style={{display: props.tubingPressureBtn? "":"none"}} type="monotone" dot={false} key="tubingPressure" dataKey="tubingPressure" stroke="#FF1493" />
//     //             <Line style={{display: props.injValveOpenBtn? "":"none"}} type="monotone" dot={false} key="injValveOpen" dataKey="injValveOpen" stroke="#FFD700" />
//     //             </LineChart>
//     //         </ResponsiveContainer>   
//     //     </div>
//     // )
// };

 const LineChart = () => {
    return (
        <div>This is LineChart</div>
    );
  };

export default LineChart;