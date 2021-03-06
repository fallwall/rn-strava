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

### AsyncStorage
react-native-async-storage
!(asyncstorage)[https://i.imgur.com/PYkiChB.png]
AsyncStorage.setItem(key, value)
AsyncStorage.getItem(key)
AsyncStorage.removeItem(key)

### navRef.js
function to export to access navigator
(the nav in app.js is hard to get access to)

### Navigation Events
```
import { NavigationEvents } from 'react-navigation';
```
```
<NavigationEvents
  onWillBlur={clearErrorMessage}
/>
```
onWillBlur/onWillFocus/onDidBlur/onDidFocus

Alternatively: 
```
import { withNavigationFocus } from 'react-navigation';
```
const Component = ({isFocused}) => {
  ...
}
...

### Safe Area View
```
import { SafeAreaView } from 'react-navigation';
```
```
<SafeAreaView forceInset={{top: 'always'}>
...
</SafeAreaView>
```

### React Native Maps
npx expo-cli install react-native-maps
```
import MapView from 'react-native-maps';
```

### Expo-Location (buggy)
https://docs.expo.io/versions/latest/sdk/location/
* 2 forms of tracking: foreground(easy to setup) and background(use more battery, bit more complicated).
```
npx expo-cli install expo-location
```
Location Permission:
![locationpermission](https://i.imgur.com/ypjyzkj.png)
```
import { requestPermissionsAsync } from 'expo-loaction';
```
(currently bug with iOS with deny, no error message)
Reading location:
```
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

...

  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync({
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      }, (location) => {
        // callback here.
        console.log(location);
      });
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);
```

  ![locationprovider1](https://i.imgur.com/yxRHgCg.png)
  ![locationprovider2](https://i.imgur.com/gZnyNTi.png)

### To Avoid Stale References
* use Effect -> refe state/props/context, must add to dependency array ", [here]".
* don't define outside helper function that ref props/state/context into useEffect. cleaner to define inside useEffect.
