/* eslint-disable no-unused-vars */
import React from "react";  
import PropTypes from "prop-types";  

const Student = ({ name, studentId, age, avatar }) => {  
  return (  
    <div style={styles.container}>  
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />  
      <h2 style={styles.name}>姓名：{name}</h2>  
      <p style={styles.info}>学号：{studentId}</p>  
      <p style={styles.info}>年龄：{age}</p>  
    </div>  
  );  
};  

Student.propTypes = {  
  name: PropTypes.string.isRequired,  
  studentId: PropTypes.string.isRequired,  
  age: PropTypes.number.isRequired,  
  avatar: PropTypes.string.isRequired,  
};  

const styles = {  
  container: {  
    display: 'flex',  
    flexDirection: 'column',  
    alignItems: 'center',  
    justifyContent: 'center',  
    textAlign: 'center',  
    padding: '20px',  
    backgroundColor: '#f9f9f9',  
    borderRadius: '10px',  
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  
    margin: '20px auto',  
    width: '300px',  
  },  
  avatar: {  
    width: '100px',  
    height: '100px',  
    borderRadius: '50%',  
    marginBottom: '15px',  
  },  
  name: {  
    fontSize: '24px',  
    margin: '5px 0',  
  },  
  info: {  
    fontSize: '18px',  
    margin: '5px 0',  
    fontWeight: 'normal',  
  }  
};  

export default Student;