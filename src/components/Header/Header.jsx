import { HeaderContainer, HeaderTxt } from "./Header.styled";

export default function Header({ HeaderText, ShowIcon,IconValue}) {

  return (
    <>
      <HeaderContainer>
        <HeaderTxt>{HeaderText}</HeaderTxt>
        {
            ShowIcon && <HeaderTxt>{IconValue}</HeaderTxt>
        }
          

      </HeaderContainer>
    </>
  );
}
