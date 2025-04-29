import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222"
  },
  text: {
    color: "#fff"
  },
  button: {
    borderRadius: 10,
    fontSize: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  imageContainer: {
    flex: 1
  },
  footerContiner: {
    flex: 1 / 3,
    alignItems: "center"
  },
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#E29E3C",
    borderRadius: 42,
    padding: 3
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
  iconButton: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    color: "#fff",
    fontSize: 16
  },
  titleContainer: {
    height: "16%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalContent: {
    height: "25%",
    width: "100%",
    backgroundColor: "#222",
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    position: "absolute",
    bottom: 0
  },
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageEmoji: {
    width: 100,
    height: 100,
    marginRight: 20
  }
});