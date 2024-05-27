import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <Flex direction="column" gap="2" className="w-[100px]">
      <Text>Hello from Radix Themes :)</Text>
      <Button className="rounded-5">Let's go</Button>
    </Flex>
  );
}
