import { Top } from '@config/site';

class Route {
  static get Top(){
    return Top;
  }

  static get Domestic(){
    return Domestic;
  }
}

export {
  Route
};

// const array = {
//   route:{
//     top: <Top />
//   }
// };

// Route

// const TopRoute = array.route.top;
// <TopRoute />