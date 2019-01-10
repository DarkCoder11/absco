import React from 'react';
import TipAndTrickList from '../../containers/TipAndTricksList/TipAndTricksList';
// import Details from '../../components/Details/Details';
import DetailsList from '../../containers/DetailsList/DetailsList';
import GuidesList from '../../containers/GuidesList/GuidesList';

const footerNavigation = (props) =>  {
  let type = props.children ? props.children : 'Videos'
  switch(type) {
    case 'Videos':
      return <TipAndTrickList rightStyle={props.children === 'Videos'}/>;
    case 'Details' :
      return <DetailsList />;
    case 'Guides' :
      return <GuidesList />;
    default :
      return null
  }
}

export default footerNavigation