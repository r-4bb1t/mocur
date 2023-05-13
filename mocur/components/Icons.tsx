export const SearchIcon = ({
  color,
  className,
  tabIndex,
}: {
  color?: string;
  className?: string;
  tabIndex?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className={className}
    tabIndex={tabIndex}
  >
    <path
      d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
      fill={color ?? "white"}
    />
  </svg>
);

export const EmptyStarIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={className}
  >
    <path
      d="M8 2.5L6.43333 6.34L2.29333 6.64667L5.46667 9.32667L4.47334 13.3533L8 11.1667M8 2.5L9.56667 6.34L13.7067 6.64667L10.5333 9.32667L11.5267 13.3533L8 11.1667"
      stroke={color ?? "#0A3E2E"}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const ForkIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.0666 11.8547C13.9975 11.9085 13.9184 11.9481 13.834 11.9713C13.7495 11.9946 13.6613 12.0009 13.5743 11.99C13.4874 11.9791 13.4035 11.9512 13.3273 11.9078C13.2512 11.8645 13.1844 11.8065 13.1306 11.7373L11.468 9.60001C11.2506 9.32044 10.9508 9.11632 10.611 9.01654C10.2712 8.91675 9.90867 8.92637 9.57465 9.04401L9.91265 9.47001L12.714 12.2713C12.8354 12.3971 12.9026 12.5655 12.9011 12.7403C12.8996 12.9151 12.8295 13.0823 12.7059 13.2059C12.5823 13.3295 12.415 13.3996 12.2402 13.4011C12.0654 13.4026 11.897 13.3354 11.7713 13.214L8.96998 10.4127L8.54331 10.0747C8.42574 10.4088 8.41623 10.7714 8.51614 11.1112C8.61604 11.451 8.82029 11.7507 9.09998 11.968L11.238 13.6307C11.3731 13.7407 11.4598 13.8993 11.4795 14.0724C11.4992 14.2456 11.4502 14.4196 11.3432 14.5571C11.2362 14.6946 11.0795 14.7848 10.9069 14.8083C10.7342 14.8317 10.5592 14.7867 10.4193 14.6827L8.28131 13.02C7.72032 12.5836 7.33107 11.9634 7.18196 11.2684C7.03285 10.5735 7.13341 9.84818 7.46598 9.22001L2.94798 5.63668C2.77572 5.50023 2.63428 5.32889 2.53293 5.1339C2.43159 4.93891 2.37264 4.72469 2.35996 4.50531C2.34728 4.28593 2.38115 4.06634 2.45934 3.86097C2.53754 3.65561 2.6583 3.46911 2.81369 3.31372C2.96908 3.15833 3.15558 3.03757 3.36094 2.95937C3.56631 2.88118 3.78589 2.84731 4.00528 2.85999C4.22466 2.87267 4.43888 2.93162 4.63387 3.03296C4.82886 3.13431 5.0002 3.27575 5.13665 3.44801L8.71998 7.96601C9.34815 7.63344 10.0734 7.53288 10.7684 7.68199C11.4633 7.8311 12.0835 8.22035 12.52 8.78134L14.1833 10.9193C14.2918 11.0589 14.3403 11.2359 14.3183 11.4113C14.2963 11.5867 14.2062 11.7462 14.0666 11.8547Z"
      fill={color ?? "#0A3E2E"}
    />
  </svg>
);

export const ColoredStarIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={className}
  >
    <path
      d="M8 2.5L6.43333 6.34L2.29333 6.64667L5.46667 9.32667L4.47334 13.3533L8 11.1667M8 2.5L9.56667 6.34L13.7067 6.64667L10.5333 9.32667L11.5267 13.3533L8 11.1667"
      fill={color ?? "#FFD600"}
    />
    <path
      d="M8 2.5L6.43333 6.34L2.29333 6.64667L5.46667 9.32667L4.47334 13.3533L8 11.1667L11.5267 13.3533L10.5333 9.32667L13.7067 6.64667L9.56667 6.34L8 2.5Z"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const HalfStarIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    className={className}
  >
    <path
      d="M8 2.5L6.43333 6.34L2.29333 6.64667L5.46667 9.32667L4.47334 13.3533L8 11.1667V2.5Z"
      fill={color ?? "#FFD600"}
    />
    <path
      d="M8 2.5L6.43333 6.34L2.29333 6.64667L5.46667 9.32667L4.47334 13.3533L8 11.1667M8 2.5L9.56667 6.34L13.7067 6.64667L10.5333 9.32667L11.5267 13.3533L8 11.1667"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const AddIcon = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    className={className}
  >
    <path
      d="M6 14.5V8.5H0V6.5H6V0.5H8V6.5H14V8.5H8V14.5H6Z"
      fill={color ?? "black"}
    />
  </svg>
);
