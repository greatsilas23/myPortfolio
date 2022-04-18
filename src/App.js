import React, {Component} from 'react'


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
		<form action="http://localhost:5000/" method="post">
			<label>Quiz</label><br/>
			<input id="quiz" name="quiz" type="text" placeholder="70"/><br/>
			<label>Group</label><br/>
			<input id="group" name="group" type="text" placeholder="70"/><br/>
			<label>Quiz</label><br/>
			<input id="listening" name="listening" type="text" placeholder="70"/><br/>
			<label>Quiz</label><br/>
			<input id="project" name="project" type="text" placeholder="70"/><br/>
			<input type="submit" name="submit" value="average"/><input type="reset" value="clear"/>
		</form>
            </div>
        )
    }
}

export default App
