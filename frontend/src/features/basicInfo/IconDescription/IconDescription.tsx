import { HStack, Icon, VStack } from "@chakra-ui/react";

import styles from "./IconDescription.module.css";

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export default function IconDescription({
  icon,
  title,
  description,
}: Readonly<Props>) {
  return (
    <VStack align="flex-start">
      <HStack gap={"10px"}>
        <div className={styles.iconWrapper}>
          <Icon as={icon} />
        </div>
        <div className={styles.title}>{title}</div>
      </HStack>
      <div className={styles.description}>{description}</div>
    </VStack>
  );
}
