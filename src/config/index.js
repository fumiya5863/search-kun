import { Site } from '@config/Site';
import { Watch } from '@config/Watch';

// import { Config } from '@config';

// Config.Site

class Config {
  static get Site(){
    return Site;
  }

  static get Watch(){
    return Watch;
  }
}

export {
  Config
};


// //
// class Config{
//   get Site(){
//     return Site;
//   }
// }

// class Config{
//   Site(){
//     return Site;
//   }
// }

// const config = new Config;
// config.Site;
// config.Site();