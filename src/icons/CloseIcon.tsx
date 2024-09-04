import Svg, { Path } from "react-native-svg";

export default function CloseIcon(style: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...style}
    >
      <Path
        d="M4.65 4.65a.938.938 0 011.325 0L10 8.675l4.025-4.025a.936.936 0 011.585.903.938.938 0 01-.26.422L11.325 10l4.025 4.025a.936.936 0 11-1.325 1.325L10 11.325 5.975 15.35a.937.937 0 01-1.325-1.325L8.675 10 4.65 5.975a.938.938 0 010-1.325z"
        fill="#6A737D"
      />
    </Svg>
  );
}
