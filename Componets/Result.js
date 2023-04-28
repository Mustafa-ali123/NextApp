import Box from '@mui/material/Box'

const Result = (props) => {
    const{ corr , inco}=props
  return (
    <>
      <Box className="container result">
        <h3 className='py-3'>Result</h3>
        <span>Correct Answer : {corr} </span><br/>
        <span>Incorrect Answer : {inco}</span><br/>

      </Box>

    </>
  )
}

export default Result