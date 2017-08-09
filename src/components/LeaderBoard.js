import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import './App.css'

export default connect(
    state => ({
        memberFetching: state.memberFetching

    }),
    dispatch => ({
        success: data => {
            console.log(data)
            dispatch({
                type: 'members/FETCH__SUCCESS',
                data: data})
        },

    })
)(
    class List extends React.Component {

        componentWillMount() {
            fetch(
                `${process.env.PUBLIC_URL}/data/pointsRecived.json`
            ).then(
                response => response.json().then(
                    data => {console.log(data);
                        this.props.success(data)}
                ))

        }



        render() {

            const member = this.props.memberFetching.data
            
            return (
                <div>{
                    member
                    === null ?
                        null :
                        member.sort((a,b) => b.points - a.points).map(member => <Table striped bordered condensed hover responsive>
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Points Recived</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{member.user_id}</td>
                                    <td>{member.points}</td>
                                </tr>
                                </tbody>
                            </Table>

                        )
                }</div>

            )


        }
    }
)