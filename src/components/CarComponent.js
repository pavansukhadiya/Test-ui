import React from 'react';
import CarService from '../services/CarService';

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
        })  .then(cars => cars.json())
            .then(cars => 
                this.setState({ 
                    cars: Array.from(cars).sort((a, b) => a.date_added.localeCompare(b.date_added))}))
    }

    render(){
        return(
        <div>
            <h1 >Car List</h1>
            <div>
                <table className=" table table-striped">
                <thead>
                    <tr>
                        <td> ID </td>
                        <td> warehouseName </td>
                        <td> Make </td>
                        <td> Model </td>
                        <td> Year  </td>
                        <td> Price </td>
                        <td> date </td>
                        <td> licenced </td>
                    </tr>
                </thead>
                    <tbody>
                    {
                    this.state.cars.map(
                        car => 
                            
                                <tr key={car.id}>
                                <td> {car.id}</td>
                                <td> {car.warehouseName}</td>
                                <td> {car.make}</td>
                                <td> {car.model}</td>
                                <td> {car.year_model}</td>
                                <td> $ {car.price}</td>
                                <td> {car.date_added}</td>
                                <td> {car.licensed}</td>
                                </tr>
                            
                        
                    )  
                }
                    </tbody>
                </table>
            </div>
         </div>

        );
    }
}

export default CarComponent;