import {
  Text,
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from "expo-clipboard";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopying(true);

    await Clipboard.setStringAsync(discord);

    Alert.alert("Discord Copiado!", "Cole no discord e encontre seu duo!");

    setIsCopying(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            onPress={handleCopyDiscordUserToClipboard}
            style={styles.discordButton}
            disabled={isCopying}
          >
            <Text style={styles.discord}>
              {isCopying ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
