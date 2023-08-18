export default function BurgerMenuIcon({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width={size} // added size here
    //   height={size} // added size here
    //   fill={color} // added color here
    // >
    //   <path fill="none" d="M0 0h24v24H0z" />
    //   <path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zm-2-1V9.978l-7-5.444-7 5.444V19h14z" />
    // </svg>
    <svg
      viewBox="0 0 21 21"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={color}
        fill-rule="evenodd"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m4.5 6.5h12" />
        <path d="m4.498 10.5h11.997" />
        <path d="m4.5 14.5h11.995" />
      </g>
    </svg>
  );
}
