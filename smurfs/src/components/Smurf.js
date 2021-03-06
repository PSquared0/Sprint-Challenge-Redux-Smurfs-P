import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurf = props => {
  const { smurf, deleteSmurf } = props

  const clickHandler = () => {
    deleteSmurf(smurf.id)
  }

  return (
    <div key={smurf.id} className="smurf-card">

      <h2>{smurf.name}</h2>
      <h4>{smurf.age}</h4>
      <p>{smurf.height}</p> <p className="close-button" onClick={clickHandler}>X</p>
      <Link to={`/update/${smurf.id}`}>Update</Link>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteSmurf })(Smurf)
