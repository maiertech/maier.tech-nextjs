type Props = {
  className?: string;
};

export default function Logo(props: Props) {
  return (
    <svg fill="currentColor" {...props} viewBox="0 0 200 219">
      <path d="M62.175 71.811C62.175 76.513 58.36 80.327 53.659 80.327C48.949 80.327 45.133 76.514 45.133 71.811C45.133 67.108 48.949 63.292 53.659 63.292C58.36 63.292 62.175 67.108 62.175 71.811Z" />
      <path d="M149.536 78.275C154.241 78.275 158.056 74.4605 158.056 69.755C158.056 65.0495 154.241 61.235 149.536 61.235C144.831 61.235 141.016 65.0495 141.016 69.755C141.016 74.4605 144.831 78.275 149.536 78.275Z" />
      <path d="M199.204 25.349H116.023V60.071C110.921 58.505 105.495 57.635 99.854 57.635C94.28 57.635 88.916 58.486 83.866 60.017V25.349H0.684998V108.532H14.265L16.137 131.755C16.392 183.571 94.246 216.203 97.571 217.571L99.946 218.549L102.324 217.571C105.642 216.203 183.498 183.571 183.757 131.755L185.629 108.532H199.204V25.349V25.349ZM3.37399 28.62L16.733 38.02C16.884 37.999 17.035 37.972 17.192 37.972H67.359C67.516 37.972 67.667 37.998 67.818 38.02L81.18 28.62L71.239 42.328V91.394L81.18 105.103L68.017 95.84C67.804 95.878 67.584 95.907 67.359 95.907H17.192C16.967 95.907 16.748 95.878 16.532 95.84L3.36899 105.103L13.312 91.394V42.327L3.37399 28.62ZM171.283 130.992L171.262 131.492C171.262 170.602 112.593 199.252 99.947 204.972C87.297 199.251 28.629 170.602 28.629 131.492L26.782 108.531H83.867V70.451C88.817 68.547 94.2 67.467 99.855 67.467C105.579 67.467 111.025 68.571 116.024 70.52V108.532H173.091L171.283 130.992ZM196.516 105.104L183.353 95.841C183.137 95.879 182.922 95.908 182.698 95.908H132.525C132.301 95.908 132.083 95.879 131.868 95.841L118.71 105.104L128.646 91.395V42.329L118.71 28.621L132.067 38.021C132.223 38 132.37 37.973 132.525 37.973H182.698C182.855 37.973 183.001 37.999 183.151 38.021L196.516 28.621L186.578 42.329V91.399L196.516 105.104Z" />
      <path d="M19.598 19.212L19.115 13.226H180.775L180.292 19.212H192.826L194.319 0.731995H5.57599L7.064 19.212H19.598Z" />
      <path d="M66.965 154.458C66.965 154.458 81.021 178.456 97.555 178.456C121.363 178.456 150.411 128.435 150.411 128.435C150.411 128.435 112.056 165.634 97.555 165.634C84.532 165.634 77.716 160.286 66.965 154.458Z" />
    </svg>
  );
}
