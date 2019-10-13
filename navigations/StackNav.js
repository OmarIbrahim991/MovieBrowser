import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#228',
            },
            headerTitleStyle: {
                flex: 1,
                fontWeight: 'bold',
            },
            headerTintColor: '#eee',
        },
    },
)

export default createAppContainer(AppNavigator)