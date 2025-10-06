import { View, Text, Image } from 'react-native'
import React from 'react'

const Comments = () => {
  return (
   <View style={{ backgroundColor: "#1C1C1C", }}>
                                       <View style={{ flexDirection: "row", marginTop: 20, paddingVertical: 15, backgroundColor: "#1C1C1C", borderRadius: 10, alignItems: "center" }}>
                                           <Image source={require('./../../assets/images/icon.png')} style={{ marginLeft: 10, height: 30, width: 30 }} />
                                           <View style={{ marginLeft: 30, backgroundColor: "#2A2A2A", height: 40, borderRadius: 10, justifyContent: "center", paddingHorizontal: 10, paddingRight: 60 }}>
                                               <Text style={{ color: "#949494", fontSize: 12 }}>Add a comment....</Text>
                                           </View>
                                           <View style={{ marginLeft: 10, backgroundColor: "#2A2A2A", height: 40, borderRadius: 10, justifyContent: "center", paddingHorizontal: 50, alignItems: "center" }}>
                                               <Text style={{ color: "white", fontSize: 12 }}>Newest</Text>
                                           </View>
                                       </View>
                                       <View style={{ flexDirection: "row", paddingVertical: 15, backgroundColor: "#1C1C1C", borderRadius: 10, alignItems: "center" }}>
                                           <Image source={require('./../../assets/images/icon.png')} style={{ marginLeft: 10, height: 30, width: 30 }} />
                                           <View style={{ marginLeft: 30, borderRadius: 10, justifyContent: "center", paddingHorizontal: 10, paddingRight: 20, width: 300 }}>
                                               <Text style={{ color: "white", fontSize: 12, fontWeight: 'bold' }}>85jhAK</Text>
                                               <Text style={{ color: "white", fontSize: 12, fontWeight: 'bold', flexWrap: 'wrap' }}>Have you got the address with the transaction history</Text>
                                               <Text style={{ color: "white", fontSize: 12, fontWeight: 'bold', marginTop: 10 }}>Reply</Text>
   
                                           </View>
                                           <View style={{ height: 40, borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                                               <Image source={require('./../../assets/images/heart.png')} />
                                               <Text style={{ color: "white", fontSize: 12, marginTop:5 }}>0</Text>
   
                                           </View>
                                       </View>
                                   </View>
  )
}

export default Comments