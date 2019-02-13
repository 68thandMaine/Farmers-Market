import React from 'react';
import {Carousel} from 'react-materialize'

function About(){
  const aboutStyles = {
    textAlign: 'center',
    marginLeft: '30%',
    marginRight: '30%',
    color: 'tomato'
  }

  return (
    <div>
    <p style = {aboutStyles}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>


        <Carousel images={[
        'https://images.unsplash.com/photo-1485637701894-09ad422f6de6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
         'https://www.ferrybuildingmarketplace.com/wp-content/uploads/fb-farmers-market-2.jpg',
        'https://static1.squarespace.com/static/5a04a7d9692ebe77ce04feb0/5a31982824a694086ed825d4/5a319872419202f0fb8f2615/1520358194217/forsyth-farmers-market-january-14-2017-meg-hill-photo-%28180of270%29.jpg?format=2500w'
     ]}
      />

</div>

  );

}

export default About
