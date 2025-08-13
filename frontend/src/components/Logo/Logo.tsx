import { Link } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

export default function Logo() {
  return (
    // if needed add specific sizing and stuff to the icon element#
    <Link as={NextLink} href="/">
      <Image src={"/baseLogo.png"} alt={"Logo"} width={64} height={64} />
    </Link>
  );
}
