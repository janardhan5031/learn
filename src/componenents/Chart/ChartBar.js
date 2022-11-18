
import './ChartBar.css';

function ChartBar(props) {
    let barFillHeight = '0%';
    
    if (props.maxValue > 0) {
        barFillHeight=Math.round((props.value/ props.maxValue)*100) +'%'
    }

    return ( 
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill'
                    style={{ height: barFillHeight }}
                ></div>    
                {/* here we are passing css style in dynamically */}
            </div>
            <div className='chart-bar__label'>{props.label }</div>
        </div>
    )
}
 
export default ChartBar;


/*
5,2,3,4,1,7,6
5,3,4,2,7,
5,4,3,2,7

*/