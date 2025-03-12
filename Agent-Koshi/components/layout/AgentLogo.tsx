import { cn } from "@/lib/utils";

interface AgentLogoProps {
  className?: string;
}

export const AgentLogo = ({ className }: AgentLogoProps) => (
  <div className={cn("group", className)}>
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-500 ease-out group-hover:rotate-[360deg]"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 17C33 25.8365 25.8365 33 17 33C8.16347 33 1 25.8365 1 17C1 8.16347 8.16347 1 17 1C25.8365 1 33 8.16347 33 17ZM22.9391 4.55191C26.8416 6.4172 29.73 10.0636 30.5517 14.4389C30.6988 15.2218 30.6318 16.1297 30.2971 16.7322C29.9623 17.3348 29.1608 17.9284 28.4368 18.3636C27.8633 18.7083 27.122 19.0352 26.2342 19.3273C25.9108 19.4337 25.749 19.4868 25.637 19.4017C25.5249 19.3164 25.5332 19.1407 25.5499 18.7892C25.5785 18.1862 25.5921 17.5745 25.5921 16.9572C25.5921 15.9379 25.5301 14.9422 25.412 13.9811C26.085 13.7983 27.2359 13.2228 27.8114 12.7913C27.3537 11.1893 25.2171 7.4756 22.6238 5.1413C21.8569 4.45092 21.4734 4.10573 21.5379 4.00936C21.6023 3.91299 22.0479 4.12596 22.9391 4.55191ZM15.8322 4.96675C15.8964 5.00944 15.8964 5.10077 15.8964 5.28342V11.2139C14.3708 11.254 12.9051 11.3764 11.5381 11.5707C11.3588 11.5962 11.2692 11.6089 11.2215 11.5556C11.1738 11.5021 11.196 11.4159 11.2405 11.2434C11.501 10.2345 11.8344 9.31102 12.2356 8.49484C13.1055 6.72517 14.2317 5.56823 15.526 5.02548C15.6874 4.95787 15.768 4.92405 15.8322 4.96675ZM11.9176 13.75C13.1532 13.5772 14.4904 13.4645 15.8964 13.4256V15.0103H15.8999V15.0449C17.3729 15.1073 18.941 15.0628 20.1683 14.9862C20.2127 15.6278 20.2357 16.2858 20.2357 16.9563C20.2357 18.1846 20.1908 19.3613 20.0973 20.4676L20.0924 20.468C20.029 21.2531 19.943 21.9586 19.814 22.7058L19.8247 22.705C19.6179 23.964 19.3299 25.0891 18.9537 26.0423C18.0593 28.3084 16.8497 29.2274 15.4034 29.2274C15.0369 29.2274 14.5432 29.0501 13.9486 28.4582C13.3575 27.8697 12.7724 26.9686 12.2564 25.7951C12.211 25.6916 12.1662 25.5866 12.1223 25.4798C11.9297 25.0126 11.515 24.669 11.0154 24.5932C10.8549 24.5689 10.6649 24.5385 10.4649 24.5052C9.85867 24.4041 9.55556 24.3535 9.40809 24.5309C9.26062 24.7083 9.36133 24.9849 9.56258 25.5383C9.69787 25.9101 9.84151 26.2693 9.99316 26.6141C10.3709 27.4735 10.8082 28.2673 11.3044 28.9521C11.5951 29.3534 11.7405 29.5541 11.6733 29.6342C11.6061 29.7142 11.3931 29.6104 10.9669 29.4028C7.11216 27.5242 4.26362 23.9014 3.44836 19.5614C3.49865 19.6048 3.54967 19.6473 3.60131 19.6889C4.4375 20.362 5.57983 20.9195 6.89332 21.3667C7.21864 21.4775 7.55905 21.583 7.91166 21.6824C7.94346 21.6909 7.99017 21.7034 8.04903 21.7189C8.16684 21.75 8.3328 21.7934 8.5248 21.8423C8.91209 21.9408 9.39236 22.0582 9.79449 22.1425C10.1472 22.2164 10.6731 22.3036 11.1628 22.3792L11.1617 22.374C12.4612 22.5739 14.145 22.7063 15.7602 22.7642C16.7988 22.8013 17.7044 22.0669 17.8181 21.0339C17.8444 20.7956 17.6538 20.5854 17.414 20.5879C17.2765 20.5893 17.1385 20.59 17 20.59C15.1189 20.59 13.3398 20.4583 11.7364 20.2245C11.2722 20.1568 11.0401 20.123 10.8801 19.9531C10.7202 19.7831 10.7005 19.5507 10.6612 19.0857C10.602 18.3856 10.5709 17.6732 10.5709 16.9563C10.5709 16.3311 10.5919 15.7184 10.6332 15.121C10.6717 14.5628 10.691 14.2838 10.8852 14.0755C11.0796 13.8672 11.3588 13.8281 11.9176 13.75ZM8.19724 18.8039C8.15564 18.1923 8.13422 17.5749 8.13422 16.9563C8.13422 16.4014 8.1496 15.8522 8.18062 15.3106C8.20133 14.9479 8.21164 14.7667 8.09731 14.6804C7.98296 14.5943 7.81793 14.652 7.48784 14.7673L7.44224 14.7834C6.31238 15.1822 5.47908 15.6273 4.94972 16.0647C4.41291 16.5083 4.31636 16.8298 4.31636 17.0002C4.31636 17.1747 4.41846 17.5084 4.98774 17.9668C5.54708 18.417 6.42412 18.8714 7.60596 19.2738C7.83908 19.3532 7.95564 19.3929 8.04664 19.3574C8.09387 19.3391 8.13573 19.3068 8.16569 19.266C8.22329 19.1872 8.21458 19.0594 8.19724 18.8039ZM8.76951 11.1379C9.07316 9.85351 9.4864 8.66 10.0102 7.59428C10.5216 6.55391 11.1547 5.60709 11.9153 4.81733C12.3607 4.35479 12.5835 4.12352 12.5215 4.03347C12.4595 3.94342 12.178 4.06295 11.6149 4.30203C7.43301 6.07776 4.30849 9.85902 3.44829 14.4389C3.47906 14.4124 3.51011 14.3862 3.54139 14.3604C4.34568 13.6957 5.44405 13.1441 6.70626 12.6985C6.98148 12.6013 7.26734 12.5083 7.56314 12.4194C8.05276 12.2724 8.2976 12.1988 8.44516 12.0421C8.59262 11.8855 8.65156 11.6363 8.76951 11.1379ZM21.7896 29.8575C21.7251 29.7704 21.9431 29.5236 22.3792 29.0302C22.9132 28.426 23.3731 27.7239 23.7621 26.9425C24.345 25.7718 24.7695 24.4256 25.0621 22.9632C25.1667 22.4409 25.2188 22.1797 25.3704 22.0145C25.5219 21.8492 25.7779 21.7743 26.2897 21.6246C27.5666 21.2512 28.6859 20.7934 29.5759 20.2584C29.7001 20.1837 29.823 20.1055 29.9436 20.0237C30.2151 19.8397 30.3508 19.7477 30.4263 19.8003C30.5018 19.8528 30.4644 20.0046 30.3897 20.3082C29.3736 24.4346 26.4998 27.83 22.706 29.5568C22.138 29.8153 21.854 29.9446 21.7896 29.8575Z"
        className="fill-accent"
      />
    </svg>
  </div>
);
