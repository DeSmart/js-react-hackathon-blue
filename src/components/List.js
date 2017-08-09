import React from 'react'
import { connect } from 'react-redux'

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
                            member => <table>
                                <tr key="id">Member</tr>
                                <td>{member.nick}</td>
                            </table>
                        )
                }</div>
            )


        }
    }
)