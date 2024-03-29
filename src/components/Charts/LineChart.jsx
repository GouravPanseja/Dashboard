import React from "react";
import {ChartComponent,LineSeries, SeriesCollectionDirective,SeriesDirective, Inject, Tooltip, DateTime,Legend} from "@syncfusion/ej2-react-charts"
import { lineCustomSeries,LinePrimaryXAxis,LinePrimaryYAxis } from "../../data/dummy";
import {useStateContext} from "../../context/ContextProvider"

const LineChart = ()=>{
    const {currentMode} = useStateContext();

    return(
        <div>
            <ChartComponent 
                id="line-chart"
                height="420px"
                primaryXAxis = {LinePrimaryXAxis}
                primaryYAxis = {LinePrimaryYAxis}
                chartArea={{border:{width:0}}}
                tooltip={{enable:true}}
                background={currentMode === 'Dark' ? "#33373E" : "#ffffff"}
            >
                <Inject services={[LineSeries, DateTime,Legend,Tooltip]}/>

                <SeriesCollectionDirective>
                    {lineCustomSeries.map((item,idx)=>(
                        <SeriesDirective key={idx} {...item}>

                        </SeriesDirective>
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default LineChart;