import React from 'react';
import { FlatList, View , StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from "../components/Screen";
import colors from '../config/colors';
import Icon from "../components/Icon";
import ListItemSeperator from "../components/ListItemSeperator";
import routes from "../navigation/routes"
import useAuth from '../auth/useAuth';

const imageItems=[
    {
        title:"My Listing",
        icon:{
            name:"format-list-bulleted",
            backgroundColor:colors.secondary,
        }
    },
    {
        title:"My Messages",
        icon:{
            name:"email",
            backgroundColor:colors.primary,
        },
        targetScreen:routes.MESSAGE,
    }
]

function AccountScreen({navigation}) {

    const {user, logOut}=useAuth();

    return (
        <Screen style={{backgroundColor:colors.light}}>
            <View>
                <ListItem
                    title={user.name}
                    subTitle={user.email}
                    image={require("../assets/p1.jpg")}
                />
            </View>
            <View style={styles.iconcontainer}>
                <FlatList
                    data={imageItems}
                    keyExtractor={(imageItem)=>imageItem.title}
                    ItemSeparatorComponent={ListItemSeperator}
                    renderItem={({item})=>(
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />}
                            onPress={()=>navigation.navigate(item.targetScreen)}    
                        />
                    )}
                />
            </View>
            <ListItem
                title="Logout"
                IconComponent={
                    <Icon 
                        name="logout"
                        backgroundColor="#ffe66d"
                    />}
                onPress={()=>logOut()}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    iconcontainer:{
        marginVertical:20,
    },
})

export default AccountScreen;