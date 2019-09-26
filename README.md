#React Native Strava

### Install

```
npm init -y
npm i bcrypt express jsonwebtoken mongoose nodemon
```

### Start Server
```
npm run dev
```
aka
```
node src/index.js
```

### Visual Concept

![data](https://i.imgur.com/VeeG0dq.png)
![screens1](https://i.imgur.com/44saAaI.png)
![screens2](https://i.imgur.com/aBO4Yvt.png)
![mongo](https://i.imgur.com/SdgYcYs.png)

### Screens / Nav

![screens](https://i.imgur.com/ZvigzbC.png)
![screens](https://i.imgur.com/qpaaylE.png)

Nav fix:

```
npm install react-navigation
npx expo-cli install react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs
```

```
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
```

### React-Native-Elements
```
npm i react-native-elements
```
docs: https://react-native-training.github.io/react-native-elements/