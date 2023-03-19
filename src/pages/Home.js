import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
import { Box, Grid, Typography } from '@mui/material'

const Home = () => {
  return (
    <div>
hey
      <Grid container sx={{ marginTop: "10%", marginBottom: "2%" }}>
        <Grid item xs={12} md={1} sm={1}>
        </Grid>
        <Grid item xs={12} md={10} sm={10}>
          <Box style={{ color: "white", background: "rgba(255, 255, 255, 0)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(20px)", height: "40vh", padding: "5px" }}>
            {/* centre Typography */}
            <Typography variant="h3" align="center" style={{ marginTop: "5%", color: "white", fontWeight: 700 }}>
              The Best UI Designs Transformations
            </Typography>
            <Typography variant="h5" align="center" style={{ marginTop: "5%", color: "white", fontFamily: "Times Roman", fontWeight: 700 }}>
              We Provide services for <span className='transist'></span>
            </Typography>

          </Box>
        </Grid>
        <Grid item xs={12} md={1} sm={1}>
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{padding:"2%"}}>
        {[0,1,2].map((data)=>(<Grid  item xs={12} md={4} sm={3}>
          <Card  style={{background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",color:"white", backdropFilter: "blur(50px)",height:"30vh"}}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Grid>))}
        
      </Grid>

      <Box style={{ backgroundColor: "#01002C", paddingTop: "5%",paddingBottom:"1%",paddingRight:"5%",paddingLeft:"5%",marginTop:"5%" }}>
        <Carousel style={{marginTop:"5%"}}>
          {[0, 1, 2].map((data) => (<Carousel.Item interval={1000} >
            <Box style={{ color: "white", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(50px)", height: "40vh", padding: "5px" }}>
              {/* centre Typography */}
              <Typography variant="h3" align="center" style={{ marginTop: "5%", color: "white", fontWeight: 700 }}>
                The Best UI Designs Transformations
              </Typography>

            </Box>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>))}

        </Carousel>

        <Grid container sx={{ marginTop: "5%" }}>
          <Grid item xs={12} md={1} sm={1}>
          </Grid>
          <Grid item xs={12} md={10} sm={10}>
            <Box style={{ color: "white", borderRadius: "1000px", background: "rgba(255, 255, 255, 0.1)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.18)", backdropFilter: "blur(20px)", height: "40vh", padding: "5px" }}>
              {/* centre Typography */}
              <Typography variant="h3" align="center" style={{ marginTop: "5%", color: "white", fontWeight: 700 }}>
                The Best UI Designs Transformations
              </Typography>
              <Typography variant="h5" align="center" style={{ marginTop: "5%", color: "white", fontFamily: "Times Roman", fontWeight: 700 }}>
                We Provide services for <span className='transist'></span>
              </Typography>

            </Box>
          </Grid>
          <Grid item xs={12} md={1} sm={1}>
          </Grid>
        </Grid>
      </Box>



    </div>
  )
}
export default Home