import React from "react";
import {ChartComponent,SplineAreaSeries, SeriesCollectionDirective,SeriesDirective, Inject, DateTime,Legend} from "@syncfusion/ej2-react-charts"
import { areaCustomSeries,areaPrimaryXAxis,areaPrimaryYAxis } from "../../data/dummy";
import {useStateContext} from "../../context/ContextProvider"

const AreaChart = ()=>{
    const {currentMode} = useStateContext();

    return(
        <div>
            <ChartComponent 
                id="area-chart"
                height="420px"
                primaryXAxis = {areaPrimaryXAxis}
                primaryYAxis = {areaPrimaryYAxis}
                chartArea={{border:{width:0}}}
                tooltip={{enable:true}}
                background={currentMode === 'Dark' ? "#33373E" : "#ffffff"}
            >
                <Inject services={[SplineAreaSeries, DateTime,Legend]}/>

                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item,idx)=>(
                        <SeriesDirective key={idx} {...item}>

                        </SeriesDirective>
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default AreaChart;