import React from 'react'

function ParticularEquation(props){
    const styles = {
      myListItemOne: {
          minWidth: '300px',
          maxWidth: '300px',
          height: '80px',
          backgroundColor: 'red'
      },
      myListItemTwo:
      {
          minWidth: '300px',
          maxWidth: '300px',
          height: '80px',
          backgroundColor: 'yellow'
      },
      myListItemThree:
      {
          minWidth: '300px',
          maxWidth: '300px',
          height: '80px',
          backgroundColor: 'green'
      },
      myTable:
      {
          border: 'solid 1px black',
          borderCollapse: 'collapse'
      },
      myTd:
      {
          border: 'solid 1px black',
          borderCollapse: 'collapse',
          padding: '10px'
      }
    }
    return(
        <div>
            <center>
                <h1 style={{ color: 'black', fontSize: '13'}}>Particular Equation</h1>
            </center>
            <hr/>
            <div>
                <center>
                <table style={styles.myTable}>
                <tr>
                <td style={styles.myTd}>
                    <ol>
                        <h3>Roots Of Auxilliary Equation</h3>
                        <hr/>
                        <li  style={styles.myListItemOne}>&Alpha; {props.caseOneAlpha} &Beta; {props.caseOneBeta}</li>
                        <li  style={styles.myListItemTwo}>&Alpha; {props.caseTwo}</li>
                        <li  style={styles.myListItemThree}>&Alpha; {props.caseThreeAlphaExp} &Beta; {props.caseThreeBetaExp}</li>
                    </ol>
                </td>
                <td style={styles.myTd}>
                    <ol>
                        <h3>Particular Solution</h3>
                        <hr/>
                        <li  style={styles.myListItemOne}>y<sub>p</sub> = A<sub>1</sub>e<sup>{props.caseOneAlpha}x</sup> + A<sub>2</sub>e<sup>{props.caseOneBeta}</sup></li>
                        <li  style={styles.myListItemTwo}>y<sub>p</sub> = e<sup>{props.caseTwo}x</sup>(Ax+B)</li>
                        <li  style={styles.myListItemThree}>y<sub>p</sub> = e<sup>{props.caseThreeAlpha}x</sup>(Acos{props.caseThreeBeta}x+Bsin{props.caseThreeBeta}x)</li>
                    </ol>
                </td>
                </tr>
                </table>
                </center>
            </div>
        </div>
    )
}

export default ParticularEquation