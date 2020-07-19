import React from 'react';
import { Accordion} from 'react-bootstrap'
import CarCardWithDetails from './CarCardWithDetails';
import CarCardWODetails from './CarCardWODetails';

class CarComponent extends React.Component{    

    constructor(props){
        super(props);
        this.state={
            cars: [],
            sortedCars: []
        }
    }

    componentDidMount(){

        fetch('http://localhost:8081/warehouse/cars',
        {
            method: 'get',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(cars => cars.json())
          .then(cars => 
                this.setState({ 
                    cars: Array.from(cars).sort((a, b) => a.date_added.localeCompare(b.date_added))}))
    }

    render(){
        return(
            <div>
                <h1 >Car List</h1>
                <Accordion>
                {
                    this.state.cars.map(
                        car => {
                            if(car.licensed === "Y")
                                return (<CarCardWithDetails car={car}/>);
                            else 
                                return (<CarCardWODetails car={car}/> );
                        }
                    )
                }
                </Accordion>
            </div>
        );
    }
}

export default CarComponent;