import {
  Input,
  Textarea,
  Button,
  Card,
  Stack,
  Field,
  HStack,
  Image,
} from "@chakra-ui/react";

import styles from "./BaseContactForm.module.css";

// export default function BaseContactForm() {
//   return (
//     <form action="https://formspree.io/f/manbabll" method="POST">
//       <VStack gap={4} maxW="480px">
//         <VStack w="full" align="start" gap={1}>
//           <Text fontWeight="bold">Name</Text>
//           <Input name="name" placeholder="Your Name" required />
//         </VStack>

//         <VStack w="full" align="start" gap={1}>
//           <Text fontWeight="bold">Email</Text>
//           <Input
//             type="email"
//             name="email"
//             placeholder="you@example.com"
//             required
//           />
//         </VStack>

//         <VStack w="full" align="start" gap={1}>
//           <Text fontWeight="bold">Message</Text>
//           <Textarea
//             name="message"
//             placeholder="How can we help?"
//             rows={6}
//             required
//           />
//         </VStack>

//         {/* Hidden fields for Formspree */}
//         <input type="hidden" name="_subject" value="New website contact" />
//         <input type="hidden" name="_redirect" value="/thank-you" />
//         <input type="text" name="_gotcha" style={{ display: "none" }} />

//         <Button type="submit" colorScheme="red" w="full">
//           Send
//         </Button>
//       </VStack>
//     </form>
//   );
// }

export const BaseContactForm2 = () => (
  <Card.Root
    // maxW="60vw"
    variant="elevated"
    padding={"40px"}
    // className={styles.card}
  >
    <HStack justifyContent={"center"} gap={"4rem"}>
      <form
        action="https://formspree.io/f/manbabll"
        method="POST"
        className={styles.form}
      >
        <Card.Header>
          <Card.Title fontWeight={500} fontSize={28}>
            Let’s make fulfilment simple
          </Card.Title>
          <Card.Description fontWeight={400} fontSize={18}>
            Tell us about your business and we’ll show you how Vertex can help
            store, pack, and deliver your products efficiently.
          </Card.Description>
        </Card.Header>
        <Card.Body paddingTop={"2rem"} paddingBottom={"1.2rem"}>
          <Stack gap="4">
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input
                name="name"
                placeholder="Your Name"
                borderColor={"#3b3833"}
                bg={"#1b1a1aff"}
                padding={"0.8rem"}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                borderColor={"#3b3833"}
                bg={"#1b1a1aff"}
                padding={"0.8rem"}
                required
              />
            </Field.Root>
            <Field.Root>
              <Field.Label>Message</Field.Label>
              <Textarea
                name="message"
                placeholder="How can we help?"
                rows={8}
                borderColor={"#3b3833"}
                bg={"#1b1a1aff"}
                padding={"0.8rem"}
                required
              />
            </Field.Root>
          </Stack>
        </Card.Body>

        {/* Hidden fields for Formspree */}
        <input type="hidden" name="_subject" value="New website contact" />
        <input type="hidden" name="_redirect" value="/thank-you" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <Button type="submit" colorScheme="red" w="full" bg={"#ffe100"}>
          Send Message
        </Button>
      </form>
      <Image src="/IMAGE_1.png" alt="img" width={"400px"} rounded="md" />
    </HStack>
  </Card.Root>
);
