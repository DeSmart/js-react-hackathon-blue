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
                `${process.env.PUBLIC_URL}/data/member.json`
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
                        member.map(
                            member => <Table striped bordered condensed hover responsive>
                                <thead>
                                <tr>
                                    <th>Nick</th>
                                    <th>ID</th>
                                    <th>Points</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{member.nick}</td>
                                    <td>{member.id}</td>
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