import React from 'react'

const styles = {
    backgroundColor: "lightgray",
    padding: "15px",
    borderRadius: "8px",
    color: "black",
}

const ProfileCard = () => {
  return (
    <div style={styles} >
        <h1>About me</h1>
        <p>Hi, I am Nitish Sharma and am going to be a react monster soon</p>
    </div>
  )
}

export default ProfileCard
