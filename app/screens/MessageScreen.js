import React,{useState} from 'react';
import { FlatList,StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDelete from '../components/ListItemDelete';

const initalMessage=[
    {
        id:1,
        title:"Title1",
        description:"I want to purchase this bike!",
        image:require("../assets/p1.jpg"),
    },
    {
        id:2,
        title:"Title2",
        description:"But it is sold now you can't buy it now!",
        image:require("../assets/p1.jpg"),
    }
]

function MessageScreen(props) {
    const [messages,setMessages]=useState(initalMessage);
    const [refreshing,setRefreshing]=useState(false);

    const handleDelete=(message)=>{
        setMessages(messages.filter((m)=> m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
            data={messages}
            keyExtractor={(message)=> message.id.toString()}
            renderItem={({item})=> 
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={()=> console.log("MEssage Sent")}
                    renderRightActions={() => 
                        <ListItemDelete onPress={()=>handleDelete(item)}/>}
                />}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={()=>
            {
             setMessages([
                {
                    id:2,
                    title:"Title2",
                    description:"But it is sold now you can't buy it now!",
                    image:require("../assets/p1.jpg")
                },
             ]);   
            }}
            />
        </Screen>
    );
}

const styles= StyleSheet.create({

});

export default MessageScreen;