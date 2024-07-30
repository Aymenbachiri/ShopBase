export default function LogInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={46}
          strokeDashoffset={46}
          d="M8 5V4C8 3.44772 8.44772 3 9 3H18C18.5523 3 19 3.44772 19 4V20C19 20.5523 18.5523 21 18 21H9C8.44771 21 8 20.5523 8 20V19"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.5s"
            values="46;0"
          ></animate>
        </path>
        <path
          strokeDasharray={12}
          strokeDashoffset={12}
          d="M4 12h11"
          opacity={0}
        >
          <set attributeName="opacity" begin="0.6s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray={6}
          strokeDashoffset={6}
          d="M15 12l-3.5 -3.5M15 12l-3.5 3.5"
          opacity={0}
        >
          <set attributeName="opacity" begin="0.8s" to={1}></set>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
