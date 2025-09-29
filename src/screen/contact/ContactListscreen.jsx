import { View, Text, FlatList } from 'react-native'
import React from 'react'
import {users}  from './UserContact'
import ContactItem from '../../component/ContactItem'

const ContactListscreen = () => {

    const renderItems= ({item})=>(
         <ContactItem name={item.name} email={item.email}/>
    )
  return (

      <FlatList
        data={users}
        renderItem={renderItems}
        keyExtractor={(item) =>item.id}
        ListHeaderComponent={<Text style={{fontSize:20}} >Contact</Text>}
        ListHeaderComponentStyle={{alignItems:'center',marginBottom:10,}}
      />
    
  )
}

export default ContactListscreen