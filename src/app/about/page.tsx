import { cn } from "@/utils/cn";
import { Flex, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <div
      className={cn(
        "h-[50svh] flex flex-col",
        "text-gray-11",
        "w-[80vw] sm:w-[60vw] md:w-[40vw]",
      )}
    >
      <Flex>
        <div className="flex flex-col">
          <Text size="3" weight={"medium"} className="text-gray-12 vt-test">
            Frank Hsu
          </Text>
          <Text size="2">Full Stack Developer</Text>
        </div>
      </Flex>
    </div>
  );
}
