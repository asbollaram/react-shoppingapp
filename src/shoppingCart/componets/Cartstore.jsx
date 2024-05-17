import React from 'react';

const Cartstore = (props) => {
  const { title } = props.gentsFashion || {};
  //
  let title;
   if (props.gentsFashion) {
       ({ title } = props.gentsFashion);
   }
  return (
    <div className="cartSention">
      <div className="menSecation">
        <h2>hello</h2>
        <div className="menImages">ccczcz</div>
      </div>
    </div>
  );
};

export default Cartstore;
