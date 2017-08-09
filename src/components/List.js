import React from 'react'
import { connect } from 'react-redux'

import './App.css'

export default connect(
    state => ({
        members: state.members,

    }),
    dispatch => ({
        success: data => dispatch({
            type: 'products/FETCH__SUCCESS',
            data: data
        }),

    })
)(
    class List extends React.Component {
        componentWillMount() {
            fetch(
                'api.pandabot.desmart.com/users',{
                    method: 'GET'

            }
            ).then(
                response => response.json().then(
                    data => this.props.success(data)
                )
            )
        }



        render() {
            return ( <div> dasdaasdasdasdsdas</div>

                )

        }
    }
)