import React, {Component} from 'react'
import VectorsDifferentialGeometry from './components/VectorsDifferentialGeometry.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            Vectors: {
                unitVector: 0
            },
            OdeSecondOrderCase:{
                OdeComplimentaryCase: {
                    realDistinct: {
                        alpha: 7,
                        beta: 2
                    },
                    complexConjugate: {
                        alpha: { exp: "3 + 4i", real: 3},
                        beta: { exp: "3 - 4i", real: 3}
                    },
                    realEqual: 4
                },
                OdeParticularCase: {
                    exponentialAlpha: 7,
                    trigAlpha: "",
                    polynomial: "",
                    exponentialAlphaAndPolynomialOrTrigExp: "",
                    exponentialAlphaAndFunctionAlphaEqualZero: "",
                    trigAlphaAndFunctionNegAlphaSqaredEqalZero: "",
                    prodTrigAlpha: "",
                    prodTrigAlphaPolynomial: "",
                    case9: {
                        undeterminedCoefficients: "",
                        variationOfParameters: {
                            arbitraryFunc1 : "",
                            arbitraryfunc2 : "",
                        }
                    }
                }
            },
            OdeFirstOrder: {
                separable: "",
                linear: "",
                homogenous: "",
                bernoullis: "",
                exact: ""
            },
            OdeSystems: {
            },
            OdeCauchyType: {
            },
            SeriesSolutionAboutPoint: {
                singular: {
                    regularPoint: "",
                    irregularPoint: ""
                },
                ordinary: {
                }
            }
        }
    }
    render(){
        return(
            <div className="App">
                <VectorsDifferentialGeometry />
            </div>
        )
    }
}

export default App
