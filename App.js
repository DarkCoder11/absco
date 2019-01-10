import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {Image} from 'react-native';
import configureStore from './src/store/configureStore';
import MainPageScreen from './src/screens/MainPageScreen/MainPageScreen';
import ContactScreen from './src/screens/ContactsScreen/ContactScreen';
import InformationScreen from './src/screens/InformationScreen/InformationScreen';
import CatalogList from './src/containers/CatalogList/CatalogList';
import TipAndTricksList from './src/containers/TipAndTricksList/TipAndTricksList';
import CompanyList from './src/containers/CompanyList/CompanyList';
import ShopItems from './src/components/Company/Products/ShopItems/ShopItems';
import Garage from './src/components/Garage/Garage';
import CustomTopBar from './src/UI/CustomTopBar/CustomTopBar';

const store = configureStore();



Navigation.registerComponent(
  "absco.MainPageScreen",
  () => MainPageScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.ContactScreen",
  () => ContactScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.InformationScreen",
  () => InformationScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.CatalogList",
  () => CatalogList,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.CompanyList",
  () => CompanyList,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.TipAndTricksList",
  () => TipAndTricksList,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.ShopItems",
  () => ShopItems,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.Garage",
  () => Garage,
  store,
  Provider
);

Navigation.registerComponent(
  "absco.CustomTopBar",
  () => CustomTopBar,
  store,
  Provider
);

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: "absco.MainPageScreen",
      titleImage: require('./src/assets/images/logo.png'),
      icon: require('./src/assets/images/Categories.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
    },
    {
      screen: "absco.ContactScreen",
      titleImage: require('./src/assets/images/logo.png'),
      icon: require('./src/assets/images/Contact.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
    },
    {
      screen: "absco.InformationScreen",
      titleImage: require('./src/assets/images/logo.png'),
      icon: require('./src/assets/images/Information.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
    }
  ],
  appStyle: {
    tabBarSelectedButtonColor: '#566FA7',
    tabBarBackgroundColor: '#FFFFFF',
    navBarBackgroundColor: '#F2F2F2',
    tabBarHideShadow: true,
    navBarNoBorder: true,
    topBarElevationShadowEnabled: false
  },   
  tabsStyle: {
    tabBarSelectedButtonColor: '#566FA7',
    tabBarBackgroundColor: '#FFFFFF',
    navBarBackgroundColor: '#F2F2F2',
    tabBarHideShadow: true,
    navBarNoBorder: true
  }
})


