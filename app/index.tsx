import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Button,
  Pressable,
  Modal,
} from "react-native";

import logo from "../assets/images/icon.png";
import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fdfbd4" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>First Box</Text>
        </View>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "blue",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Second Box</Text>
        </View>

        <Image source={logo} style={{ width: 300, height: 300 }} />
        <Image
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
          style={{ width: 300, height: 300 }}
        />
        <Pressable onPress={() => console.log("image pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
            style={{ width: 380, height: 300 }}
          />
        </Pressable>

        <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 20 }}>
          <Text>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            will be distracted by the readable content of a page when looking at
            its layout. The point of using Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </Text>
        </View>

        {/* <ImageBackground
        source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
        style={{ flex: 1 }}
      >
        <Text>Hello dkfdkjasdkjfdkjdfjds</Text>
      </ImageBackground> */}

        <TouchableOpacity
          style={{
            padding: 10,
            margin: 20,
            backgroundColor: "cyan",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontSize: 20 }}>Hello</Text>
        </TouchableOpacity>

        <View style={{ flex: 1, backgroundColor: "plum", margin: 10 }}>
          <Button
            title="Press"
            onPress={() => setIsOpen(true)}
            color="midnightblue"
          />

          <Modal
            visible={isOpen}
            onRequestClose={() => setIsOpen(false)}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <View
              style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}
            >
              <Text>Modal Content</Text>
              <Button
                title="close"
                color="midnightblue"
                onPress={() => setIsOpen(false)}
              />
            </View>
          </Modal>
        </View>

        <View style={{ flex: 1, backgroundColor: "plum", margin: 10 }}></View>
      </View>
    </ScrollView>
  );
}
